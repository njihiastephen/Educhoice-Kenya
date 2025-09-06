-- Set up automatic profile creation on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data ->> 'full_name', ''),
    COALESCE(new.raw_user_meta_data ->> 'role', 'student')
  );
  
  -- Also create role-specific profile
  IF COALESCE(new.raw_user_meta_data ->> 'role', 'student') = 'student' THEN
    INSERT INTO public.student_profiles (id)
    VALUES (new.id);
  ELSIF COALESCE(new.raw_user_meta_data ->> 'role', 'student') = 'institution' THEN
    INSERT INTO public.institution_profiles (id, institution_name)
    VALUES (new.id, COALESCE(new.raw_user_meta_data ->> 'full_name', 'Institution'));
  END IF;
  
  RETURN new;
END;
$$;

-- Create trigger to automatically create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
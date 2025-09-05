export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          application_date: string | null
          course_id: string | null
          created_at: string | null
          documents: Json | null
          eligibility_score: number | null
          id: string
          review_date: string | null
          reviewer_notes: string | null
          status: string | null
          student_id: string | null
          updated_at: string | null
        }
        Insert: {
          application_date?: string | null
          course_id?: string | null
          created_at?: string | null
          documents?: Json | null
          eligibility_score?: number | null
          id?: string
          review_date?: string | null
          reviewer_notes?: string | null
          status?: string | null
          student_id?: string | null
          updated_at?: string | null
        }
        Update: {
          application_date?: string | null
          course_id?: string | null
          created_at?: string | null
          documents?: Json | null
          eligibility_score?: number | null
          id?: string
          review_date?: string | null
          reviewer_notes?: string | null
          status?: string | null
          student_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "student_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          application_deadline: string | null
          application_fee_kes: number | null
          available_slots: number | null
          career_prospects: string[] | null
          category: string
          created_at: string | null
          description: string | null
          duration_years: number | null
          id: string
          institution_id: string | null
          intake_period: string | null
          is_active: boolean | null
          min_gpa: number | null
          min_grade: string | null
          occupied_slots: number | null
          qualification_level: string | null
          required_subjects: Json | null
          title: string
          tuition_fee_kes: number | null
          updated_at: string | null
        }
        Insert: {
          application_deadline?: string | null
          application_fee_kes?: number | null
          available_slots?: number | null
          career_prospects?: string[] | null
          category: string
          created_at?: string | null
          description?: string | null
          duration_years?: number | null
          id?: string
          institution_id?: string | null
          intake_period?: string | null
          is_active?: boolean | null
          min_gpa?: number | null
          min_grade?: string | null
          occupied_slots?: number | null
          qualification_level?: string | null
          required_subjects?: Json | null
          title: string
          tuition_fee_kes?: number | null
          updated_at?: string | null
        }
        Update: {
          application_deadline?: string | null
          application_fee_kes?: number | null
          available_slots?: number | null
          career_prospects?: string[] | null
          category?: string
          created_at?: string | null
          description?: string | null
          duration_years?: number | null
          id?: string
          institution_id?: string | null
          intake_period?: string | null
          is_active?: boolean | null
          min_gpa?: number | null
          min_grade?: string | null
          occupied_slots?: number | null
          qualification_level?: string | null
          required_subjects?: Json | null
          title?: string
          tuition_fee_kes?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institution_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      institution_profiles: {
        Row: {
          accreditation_number: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          description: string | null
          id: string
          institution_name: string
          institution_type: string | null
          location: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          accreditation_number?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          institution_name: string
          institution_type?: string | null
          location?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          accreditation_number?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          institution_name?: string
          institution_type?: string | null
          location?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "institution_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount_kes: number
          application_id: string | null
          created_at: string | null
          id: string
          payment_date: string | null
          payment_method: string | null
          payment_type: string | null
          receipt_url: string | null
          reference_number: string | null
          status: string | null
          transaction_id: string | null
          user_id: string | null
        }
        Insert: {
          amount_kes: number
          application_id?: string | null
          created_at?: string | null
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          payment_type?: string | null
          receipt_url?: string | null
          reference_number?: string | null
          status?: string | null
          transaction_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount_kes?: number
          application_id?: string | null
          created_at?: string | null
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          payment_type?: string | null
          receipt_url?: string | null
          reference_number?: string | null
          status?: string | null
          transaction_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string
          id: string
          phone: string | null
          role: string
          updated_at: string | null
          verification_status: string | null
        }
        Insert: {
          created_at?: string | null
          full_name: string
          id: string
          phone?: string | null
          role: string
          updated_at?: string | null
          verification_status?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          role?: string
          updated_at?: string | null
          verification_status?: string | null
        }
        Relationships: []
      }
      student_profiles: {
        Row: {
          county: string | null
          created_at: string | null
          date_of_birth: string | null
          gender: string | null
          gpa: number | null
          id: string
          index_number: string | null
          kcse_results: Json | null
          mean_grade: string | null
          school_name: string | null
          updated_at: string | null
          year_of_completion: number | null
        }
        Insert: {
          county?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          gender?: string | null
          gpa?: number | null
          id: string
          index_number?: string | null
          kcse_results?: Json | null
          mean_grade?: string | null
          school_name?: string | null
          updated_at?: string | null
          year_of_completion?: number | null
        }
        Update: {
          county?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          gender?: string | null
          gpa?: number | null
          id?: string
          index_number?: string | null
          kcse_results?: Json | null
          mean_grade?: string | null
          school_name?: string | null
          updated_at?: string | null
          year_of_completion?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "student_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

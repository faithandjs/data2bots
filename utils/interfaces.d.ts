interface JobPost {
  id: number;
  created_at: string;
  updated_at: string;
  deleted: boolean;
  title: string;
  description: string;
  status: string;
  salary: {
    min: number | null;
    max: number | null;
    currency: string;
  };
  applicant_access_type: string;
  remote: boolean;
  show_pursue_as_career: boolean;
  closing_date: string | null;
  experience: string | null;
  type: string;
  branch: {
    id: number;
    created_at: string;
    updated_at: string;
    deleted: boolean;
    name: string;
    state: string;
    city: string;
    country_code: string;
    zip: string;
    time_zone: string;
    currency: string;
    language: string;
    main_office: boolean;
    date_format: string;
    street: string;
  };
  department: {
    id: number;
    created_at: string;
    updated_at: string;
    deleted: boolean;
    name: string;
  };
}

interface jobList {
  id: string;
  description: string;
  title: string;
  created_at: string;
  updated_at: string;
  type: string;
  remote: boolean;
}

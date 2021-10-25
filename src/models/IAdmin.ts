export interface IAdmin {
    user_role: 'admin',
    document_type: string, 
    name: string, 
    last_name: string,
    email: string, 
    document_number: string, 
    date_of_birth: Date, 
    admin: {
        hospital_id: number,
    }
  }
  
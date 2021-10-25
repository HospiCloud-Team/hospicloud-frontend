export interface IPatient {
    user_role: 'patient',
    document_type: string, 
    name: string, 
    last_name: string,
    email: string, 
    document_number: string, 
    date_of_birth: Date, 
    patient: {
        blood_type: string, 
        medical_background: string,
    }
  }
  
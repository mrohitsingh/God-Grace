
export interface InquiryFormData {
  parentName: string;
  studentName: string;
  phone: string;
  grade: string;
  message: string;
}

export enum PageRoute {
  Home = '/',
  About = '/about',
  Academics = '/academics',
  Admissions = '/admissions',
  Contact = '/contact'
}

export class Patient
{
    Id: string;
    PasNumber: string;
    Forenames: string;
    Surname: string;
    DateOfBirth: Date | string;
    SexCode: number;
    HomeTelephoneNumber: string;
  
    NokName: string;
    NokRelationshipCode: number;
    NokAddressLine1: string;
    NokAddressLine2: string;
    NokAddressLine3: string;
    NokPostcode: string;

    GpCode: string;
    GpSurname: string;
    GpInitials: string;
    GpPhone: string;
   
}
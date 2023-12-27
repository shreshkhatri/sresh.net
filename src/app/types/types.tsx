export interface CountrySelectorProps {
    country: CountryType | null,
    setCountry: (selectedCountry: CountryType | null) => void;
  }
  
export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
  }

  // MobileFriendlyDrawerProps.tsx : the type for specifying opening and closing state of the drawer
export interface ItemWorkExperienceProps {
    designation: string,
    startDate: string | null
    endDate:string| null,
    employer: string,
    country: string,
    city: string,
    isContinue: boolean,
    duties_responsibilities: string[],
    achievements: string,
  }
  
  

  // MobileFriendlyDrawerProps.tsx : the type for specifying opening and closing state of the drawer
export interface MobileFriendlyDrawerProps {
    open: boolean;
    setOpen: (newState: boolean) => void;
    menus:string[]
  }
  
export interface TopNavBarProps {
    menus: string[]
  }
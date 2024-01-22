import type { WithId, Document} from 'mongodb'

export interface CountrySelectorProps {
  country: CountryType | null;
  setCountry: (selectedCountry: CountryType | null) => void;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

// MobileFriendlyDrawerProps.tsx : the type for specifying opening and closing state of the drawer
export interface TypeExperience extends WithId<Document> {
  designation: string;
  startDate: string | null;
  endDate: string | null;
  employer: string;
  country: string;
  city: string;
  isContinue: boolean;
  duties_responsibilities: string[];
  achievements: string;
}

export type TypeExperiences = {
  experiences:TypeExperience[]
}


export type cookiePreferenceProps = {
  essentialCookie: boolean;
  functionalCookie: boolean;
};

export type cookiePolicyProps = {
  reportCookieSelectionOptions: (
    cookiePreference: cookiePreferenceProps
  ) => void;
};

export type ResponseStatus = "success" | "error" | "null";

export type MainSnackBarProps = {
  open: boolean;
  setOpen: (success: boolean) => void;
  status: ResponseStatus;
  message: string;
};

export type userMessageType ={
  fname:string,
  lname:string,
  email:string,
  subject:string,
  userMessage:string
  country: CountryType | null;
  date: string
}


export type TypeLoginPayload = {
  username:string,
  password:string
}



  export type ImgsViewerProps = {
      [key: string]: any;
  }

  export interface PageTemplateProps {
    menus: string[];
    selectedMenu:string,
  }
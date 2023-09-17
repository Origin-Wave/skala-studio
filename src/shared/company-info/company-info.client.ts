import type { CompanyInfo, Employee } from "@shared/company-info";

export const companyInfoClient = {
  async getCompanyInfo(): Promise<CompanyInfo> {
    return SKALA_STUDIO_INFO;
  },
};

const DIRECTOR_KATARZYNA_CZAPIGA: Employee = {
  firstName: "Katarzyna",
  lastName: "Czapiga",
  email: "katarzyna@skala-studio.co.uk",
  phone: "07415 330 360",
};

const DIRECTOR_MARZENA_SZWED: Employee = {
  firstName: "Marzena",
  lastName: "Szwed",
  email: "marzena@skala-studio.co.uk",
  phone: "07921 045 731",
};

const SKALA_STUDIO_INFO: CompanyInfo = {
  name: "Skala Studio",
  email: "info@skala-studio.co.uk",
  address: {
    street: "18 Perry Avenue",
    city: "East Grinstead",
    postCode: "RH19 2DJ",
    country: "United Kingdom",
    googleMapsUrl: "https://maps.app.goo.gl/ZmESKb8gPZZmWqij7",
  },
  registrationNumber: "13198063",
  structure: "Limited",
  directors: [DIRECTOR_KATARZYNA_CZAPIGA, DIRECTOR_MARZENA_SZWED],
  socialMedia: {
    facebook: {
      url: "https://www.facebook.com/skala.studio.architecture/",
      name: "skala.studio.architecture",
    },
    instagram: {
      url: "https://www.instagram.com/skalastudio_architecture/",
      name: "skalastudio_architecture",
    },
    pinterest: {
      url: "https://www.pinterest.co.uk/Skala_Studio/",
      name: "Skala_Studio",
    },
  },
};

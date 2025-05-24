
export const doctorsData = {
  "Cardiology": [
    {
      "name": "Prof. Dr. Abdullah-Al-Safi Majumder",
      "specialty": "Cardiologist",
      "education": "MBBS, D. Card, MD (Cardiology), FACC, FSGC, FRCP",
      "affiliation": "Professor of Cardiology, National Institute of Cardiovascular Diseases (NICVD), Dhaka",
      "location": "Dhaka"
    },
    {
      "name": "Prof. Dr. Lutfor Rahman",
      "specialty": "Cardiac Surgeon",
      "education": "MBBS, MS (Cardiovascular & Thoracic Surgery), FRCS (Glasgow), FACS (USA)",
      "affiliation": "Professor and Head of Cardiac Surgery, NICVD, Dhaka",
      "location": "Dhaka"
    }
  ],
  "Neurology": [
    {
      "name": "Prof. Dr. Quazi Deen Mohammad",
      "specialty": "Neurologist",
      "education": "MBBS, FCPS (Medicine), MD (Neurology)",
      "affiliation": "Director, National Institute of Neurosciences & Hospital (NINS), Dhaka",
      "location": "Dhaka"
    },
    {
      "name": "Prof. Dr. Rashiduddin Ahmad",
      "specialty": "Neurosurgeon",
      "education": "MBBS, MS (Neurosurgery)",
      "affiliation": "Former Professor of Neurosurgery, Dhaka Medical College Hospital",
      "location": "Dhaka"
    }
  ],
  "Dermatology": [
    {
      "name": "Prof. Dr. Md. Delwar Hossain",
      "specialty": "Dermatologist",
      "education": "MBBS, DDV, FCPS (Dermatology)",
      "affiliation": "Professor of Dermatology, Bangabandhu Sheikh Mujib Medical University (BSMMU)",
      "location": "Dhaka"
    },
    {
      "name": "Dr. Farzana Rahman",
      "specialty": "Dermatologist",
      "education": "MBBS, FCPS (Dermatology)",
      "affiliation": "Consultant Dermatologist, Evercare Hospital, Dhaka",
      "location": "Dhaka"
    }
  ]
};

export type DoctorSpecialty = keyof typeof doctorsData;

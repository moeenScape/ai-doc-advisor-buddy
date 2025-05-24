
export const doctorsData = {
      "cardiologist": [
        {
          "name": "Prof. Dr. Abdullah-Al-Safi Majumder",
          "specialty": "Cardiologist",
          "education": "MBBS, D. Card, MD (Cardiology), FACC, FSGC, FRCP",
          "affiliation": "Professor of Cardiology, National Institute of Cardiovascular Diseases (NICVD), Dhaka",
          "location" : "Dhaka"
        },
        {
          "name": "Prof. Dr. Lutfor Rahman",
          "specialty": "Cardiac Surgeon",
          "education": "MBBS, MS (Cardiovascular & Thoracic Surgery), FRCS (Glasgow), FACS (USA)",
          "affiliation": "Professor and Head of Cardiac Surgery, NICVD, Dhaka",
          "location" : "Barishal"
        }
      ],
      "Neurology": [
        {
          "name": "Prof. Dr. Quazi Deen Mohammad",
          "specialty": "Neurologist",
          "education": "MBBS, FCPS (Medicine), MD (Neurology)",
          "affiliation": "Director, National Institute of Neurosciences & Hospital (NINS), Dhaka"
        },
        {
          "name": "Prof. Dr. Rashiduddin Ahmad",
          "specialty": "Neurosurgeon",
          "education": "MBBS, MS (Neurosurgery)",
          "affiliation": "Former Professor of Neurosurgery, Dhaka Medical College Hospital"
        }
      ],
      "Dermatology": [
        {
          "name": "Prof. Dr. Md. Delwar Hossain",
          "specialty": "Dermatologist",
          "education": "MBBS, DDV, FCPS (Dermatology)",
          "affiliation": "Professor of Dermatology, Bangabandhu Sheikh Mujib Medical University (BSMMU)"
        },
        {
          "name": "Dr. Farzana Rahman",
          "specialty": "Dermatologist",
          "education": "MBBS, FCPS (Dermatology)",
          "affiliation": "Consultant Dermatologist, Evercare Hospital, Dhaka"
        }
      ],
      "Gastroenterology": [
        {
          "name": "Prof. Dr. Md. Mahmudul Hasan",
          "specialty": "Gastroenterologist",
          "education": "MBBS, MD (Gastroenterology)",
          "affiliation": "Professor of Gastroenterology, BSMMU, Dhaka"
        },
        {
          "name": "Dr. A. N. M. Zia-Ur-Rahman",
          "specialty": "Gastroenterologist",
          "education": "MBBS, FCPS, FICS, Trained in Gastroenterology (Japan)",
          "affiliation": "Principal, Ibn Sina Medical College, Dhaka"
        }
      ],
      "Endocrinology": [
        {
          "name": "Prof. Dr. Hajera Mahtab",
          "specialty": "Endocrinologist",
          "education": "MBBS (University of Liverpool), DTM&H (Liverpool), FCPS (Pakistan)",
          "affiliation": "Professor Emeritus, BIRDEM; Former President, Endocrine Society of Bangladesh"
        },
        {
          "name": "Prof. Dr. AK Azad Khan",
          "specialty": "Endocrinologist",
          "education": "MBBS, FCPS (Medicine)",
          "affiliation": "President, Diabetic Association of Bangladesh; Professor of Medicine, BIRDEM"
        }
      ],
      "Ophthalmology": [
        {
          "name": "Prof. Dr. Md. Sharfuddin Ahmed",
          "specialty": "Ophthalmologist",
          "education": "MBBS (SBMC), DO (IPGMR), MS (Ophthalmology, BSMMU)",
          "affiliation": "Former Vice-Chancellor, BSMMU; Professor of Ophthalmology"
        },
        {
          "name": "Prof. Dr. Deen Mohammad Noorul Huq",
          "specialty": "Ophthalmologist",
          "education": "MBBS, DO, MS (Ophthalmology)",
          "affiliation": "Former Director, National Institute of Ophthalmology, Dhaka"
        }
      ],
      "Orthopedics": [
        {
          "name": "Prof. Dr. A. F. M. Ruhul Haque",
          "specialty": "Orthopedic Surgeon",
          "education": "MBBS, MS (Orthopedics)",
          "affiliation": "Former Minister of Health and Family Welfare; Professor of Orthopedics"
        },
        {
          "name": "Prof. Dr. M. A. Quader",
          "specialty": "Orthopedic Surgeon",
          "education": "MBBS, MS (Orthopedics)",
          "affiliation": "Professor of Orthopedics, Dhaka Medical College Hospital"
        }
      ],
      "Gynecology": [
        {
          "name": "Prof. Dr. Sayeba Akhter",
          "specialty": "Gynecologist",
          "education": "MBBS, FCPS (OBGYN)",
          "affiliation": "Ekushey Padak Awardee; Former Professor of Gynecology, Dhaka Medical College"
        },
        {
          "name": "Prof. Dr. Shahla Khatun",
          "specialty": "Gynecologist",
          "education": "MBBS, FCPS (OBGYN)",
          "affiliation": "National Professor; Former Professor of Gynecology, BSMMU"
        }
      ],
      "Pediatrics": [
        {
          "name": "Prof. Dr. ARM Luthful Kabir",
          "specialty": "Pediatrician",
          "education": "MBBS, FCPS (Pediatrics)",
          "affiliation": "Professor of Pediatrics, Dhaka Shishu Hospital"
        },
        {
          "name": "Prof. Dr. M. A. Mannan",
          "specialty": "Pediatrician",
          "education": "MBBS, DCH, FCPS (Pediatrics)",
          "affiliation": "Professor of Pediatrics, BSMMU"
        }
      ],
      "Psychiatry": [
        {
          "name": "Prof. Dr. Helal Uddin Ahmed",
          "specialty": "Psychiatrist",
          "education": "MBBS, FCPS (Psychiatry)",
          "affiliation": "Associate Professor, National Institute of Mental Health, Dhaka"
        },
        {
          "name": "Prof. Dr. Mohit Kamal",
          "specialty": "Psychiatrist",
          "education": "MBBS, FCPS (Psychiatry)",
          "affiliation": "Professor of Psychiatry, BSMMU"
        }
      ],
      "Urology": [
        {
          "name": "Prof. Dr. M. Fakhrul Islam",
          "specialty": "Urologist",
          "education": "MBBS, PhD (Surgery), MS (Urology)",
          "affiliation": "Professor of Urology, Bangladesh Medical College Hospital, Dhaka"
        },
        {
          "name": "Prof. Dr. M. A. Salam",
          "specialty": "Urologist",
          "education": "MBBS, MS (Urology)",
          "affiliation": "Professor of Urology, BSMMU"
        }
      ]
    }
;

export type DoctorSpecialty = keyof typeof doctorsData;

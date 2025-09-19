export const documentGuides = {
  "Aadhaar Card Services": {
    overview:
      "Aadhaar card is a 12-digit unique identification number issued by UIDAI. It serves as proof of identity and address for Indian residents. You can apply for new Aadhaar, update details, or correct information using online and offline methods.",
    timeline: "15-30 days for new enrollment, 7-15 days for updates",
    steps: [
      {
        title: "Visit Aadhaar Center",
        description:
          "Locate and visit nearest Aadhaar enrollment/update center",
        details: [
          "Find centers using UIDAI website or mobile app",
          "Check center timing and availability",
          "Book appointment online if required",
          "Carry all original documents",
        ],
      },
      {
        title: "Fill Application Form",
        description:
          "Complete the enrollment/update form with accurate details",
        details: [
          "Provide personal information carefully",
          "Select type of update required",
          "Verify all details before submission",
          "Sign the form after verification",
        ],
      },
      {
        title: "Document Verification",
        description:
          "Submit required documents for identity, address, and date of birth proof",
        details: [
          "Original documents must be presented",
          "Photocopies will be taken at center",
          "Ensure documents are valid and clear",
          "Documents should match the details provided",
        ],
      },
      {
        title: "Biometric Capture",
        description: "Provide fingerprints, iris scan, and photograph",
        details: [
          "All 10 fingerprints will be scanned",
          "Both iris will be scanned",
          "Clear photograph will be taken",
          "Ensure hands and eyes are clean",
        ],
      },
    ],
    documents: [
      {
        category: "Identity Proof (Any One)",
        items: [
          "Passport",
          "PAN Card",
          "Voter ID",
          "Driving License",
          "Bank Passbook with Photo",
          "Government ID Card",
          "Ration Card with Photo",
          "Marriage Certificate",
        ],
      },
      {
        category: "Address Proof (Any One)",
        items: [
          "Passport",
          "Bank Statement",
          "Post Office Account Statement",
          "Ration Card",
          "Voter ID",
          "Driving License",
          "Utility Bills",
          "Property Tax Receipt",
          "Insurance Policy",
          "Rent Agreement",
        ],
      },
      {
        category: "Date of Birth Proof (Any One)",
        items: [
          "Birth Certificate",
          "Passport",
          "Marksheet (Class 10/12)",
          "PAN Card",
          "Driving License",
          "Government ID with DOB",
          "Insurance Policy",
          "LIC Policy Bond",
        ],
      },
    ],
    forms: [
      {
        name: "Aadhaar Enrollment Form",
        description: "For new Aadhaar card application",
        where: "Aadhaar Centers, Online Portal",
      },
      {
        name: "Aadhaar Correction Form",
        description: "For updating/correcting existing Aadhaar details",
        where: "Aadhaar Centers, Online Portal",
      },
    ],
    tips: [
      "Carry original documents along with photocopies",
      "Ensure your mobile number is active for OTP verification",
      "Check document validity before visiting center",
      "Keep fingers and eyes clean for better biometric capture",
      "Save acknowledgment receipt for tracking status",
      "Update can be done online for certain fields",
      "Name correction requires supporting documents",
    ],
  },

  "Voter ID Card": {
    overview:
      "Voter ID card (EPIC) is an identity document issued by Election Commission of India. It's required for voting in elections and serves as a valid ID proof. You can apply online through NVSP portal or visit local election office.",
    timeline: "30-45 days for new registration, 15-30 days for corrections",
    steps: [
      {
        title: "Online Registration",
        description: "Register on National Voter Service Portal (NVSP)",
        details: [
          "Visit nvsp.in and create account",
          "Fill Form 6 for new registration",
          "Upload required documents",
          "Submit application and note reference number",
        ],
      },
      {
        title: "Document Submission",
        description: "Submit identity, address, and age proof documents",
        details: [
          "Aadhaar card as primary document",
          "Address proof for current residence",
          "Age proof showing 18+ years",
          "Recent passport size photograph",
        ],
      },
      {
        title: "Verification Process",
        description:
          "Electoral Registration Officer verifies submitted information",
        details: [
          "Field verification may be conducted",
          "Cross-verification with submitted documents",
          "Objections period for public review",
          "Final approval by election officer",
        ],
      },
      {
        title: "Card Delivery",
        description: "Receive Voter ID card at registered address",
        details: [
          "Card delivered via registered post",
          "SMS notification about dispatch",
          "Download e-EPIC from NVSP portal",
          "Physical card follows by post",
        ],
      },
    ],
    documents: [
      {
        category: "Identity Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Passport",
          "PAN Card",
          "Driving License",
          "Bank Passbook with Photo",
          "Service ID Card",
          "Pensioner Card",
          "Arms License",
        ],
      },
      {
        category: "Address Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Passport",
          "Bank Statement",
          "Utility Bills",
          "Ration Card",
          "Property Documents",
          "Rent Agreement",
          "Telephone/Mobile Bill",
        ],
      },
      {
        category: "Age Proof (Any One)",
        items: [
          "Birth Certificate",
          "Passport",
          "Marksheet (10th/12th)",
          "Aadhaar Card",
          "Driving License",
          "PAN Card",
        ],
      },
    ],
    forms: [
      {
        name: "Form 6",
        description: "Application for inclusion of name in electoral roll",
        where: "NVSP Portal, Election Office",
      },
      {
        name: "Form 8",
        description: "Application for correction of entries in electoral roll",
        where: "NVSP Portal, Election Office",
      },
      {
        name: "Form 7",
        description: "Application for deletion of name from electoral roll",
        where: "NVSP Portal, Election Office",
      },
    ],
    tips: [
      "Apply 30 days before any election for processing",
      "Use Aadhaar card for faster processing",
      "Check eligibility - must be 18+ Indian citizen",
      "Verify address details carefully to avoid rejection",
      "Track application status using reference number",
      "Download e-EPIC immediately after approval",
      "Keep mobile number active for SMS updates",
    ],
  },

  "Passport Services": {
    overview:
      "Indian passport is issued by Ministry of External Affairs through Passport Seva. It's essential for international travel and serves as a primary identity document. Applications can be submitted online through Passport Seva portal.",
    timeline: "30-45 days normal processing, 7-10 days tatkal processing",
    steps: [
      {
        title: "Online Application",
        description: "Create account and fill passport application form online",
        details: [
          "Register on passportindia.gov.in",
          "Fill application form accurately",
          "Upload photograph and signature",
          "Pay application fee online",
          "Schedule appointment at PSK/POPSK",
        ],
      },
      {
        title: "Document Preparation",
        description: "Arrange all required documents as per checklist",
        details: [
          "Identity proof documents",
          "Address proof documents",
          "Date of birth proof",
          "Current passport (for renewal)",
          "Annexure forms if applicable",
        ],
      },
      {
        title: "PSK Visit",
        description: "Visit Passport Seva Kendra on scheduled appointment",
        details: [
          "Carry original documents and copies",
          "Document verification by officer",
          "Biometric data capture",
          "Brief interview if required",
          "Collect acknowledgment receipt",
        ],
      },
      {
        title: "Police Verification",
        description: "Police verification at current and permanent address",
        details: [
          "Police officer visits for verification",
          "Present original documents if asked",
          "Verify all information provided",
          "Police clearance sent to passport office",
        ],
      },
    ],
    documents: [
      {
        category: "Identity Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Voter ID",
          "PAN Card",
          "Driving License",
          "Government Employee ID",
          "PSU Employee ID",
        ],
      },
      {
        category: "Address Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Voter ID",
          "Utility Bills",
          "Bank Statement",
          "Rent Agreement",
          "Property Tax Receipt",
          "Telephone Bill",
        ],
      },
      {
        category: "Date of Birth Proof (Any One)",
        items: [
          "Birth Certificate",
          "Marksheet (10th/12th)",
          "Aadhaar Card",
          "PAN Card",
          "Driving License",
          "Medical Certificate",
        ],
      },
    ],
    forms: [
      {
        name: "Fresh Passport Application",
        description: "For first time passport applicants",
        where: "Passport Seva Portal",
      },
      {
        name: "Re-issue Application",
        description: "For passport renewal or re-issue",
        where: "Passport Seva Portal",
      },
      {
        name: "Annexure Forms",
        description: "Additional forms based on specific requirements",
        where: "Passport Seva Portal",
      },
    ],
    tips: [
      "Book appointment well in advance during peak season",
      "Carry original documents along with self-attested copies",
      "Ensure all details match across documents",
      "Choose correct passport type based on travel needs",
      "Consider Tatkal for urgent travel requirements",
      "Keep mobile number active for SMS updates",
      "Verify police verification address is accessible",
    ],
  },

  "Driving License": {
    overview:
      "Driving License is issued by Regional Transport Office (RTO) after passing driving test. You need Learner's License first, then permanent DL. International Driving Permit can be obtained for overseas driving.",
    timeline: "30 days for Learner's License, 30 days for permanent DL",
    steps: [
      {
        title: "Learner's License Application",
        description: "Apply for Learning License as first step",
        details: [
          "Fill Form 2 for Learner's License",
          "Submit required documents",
          "Pay prescribed fees",
          "Pass computer-based theory test",
          "Receive Learner's License valid for 6 months",
        ],
      },
      {
        title: "Practice Period",
        description: "Practice driving with valid instructor or license holder",
        details: [
          "Practice for minimum 30 days",
          "Learn traffic rules and road signs",
          "Practice vehicle handling and parking",
          "Understand safety measures",
        ],
      },
      {
        title: "Permanent License Test",
        description: "Apply for permanent license and take driving test",
        details: [
          "Fill Form 4 for permanent license",
          "Submit Learner's License and documents",
          "Pass practical driving test",
          "Get medical certificate if required",
        ],
      },
      {
        title: "License Issuance",
        description: "Receive permanent driving license",
        details: [
          "Collect license from RTO",
          "Verify all details are correct",
          "License valid for 20 years (new) or as specified",
          "Keep license updated with address changes",
        ],
      },
    ],
    documents: [
      {
        category: "Identity Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Passport",
          "Voter ID",
          "PAN Card",
          "Bank Passbook with Photo",
          "Government ID Card",
        ],
      },
      {
        category: "Address Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Passport",
          "Voter ID",
          "Utility Bills",
          "Bank Statement",
          "Ration Card",
          "Rent Agreement",
        ],
      },
      {
        category: "Age Proof (Any One)",
        items: [
          "Birth Certificate",
          "Marksheet (10th/12th)",
          "Passport",
          "Aadhaar Card",
          "Medical Certificate",
        ],
      },
    ],
    forms: [
      {
        name: "Form 2",
        description: "Application for Learner's License",
        where: "RTO Office, Parivahan Portal",
      },
      {
        name: "Form 4",
        description: "Application for Permanent Driving License",
        where: "RTO Office, Parivahan Portal",
      },
      {
        name: "Form 9",
        description: "Application for renewal of driving license",
        where: "RTO Office, Parivahan Portal",
      },
    ],
    tips: [
      "Minimum age: 16 for two-wheeler, 18 for four-wheeler",
      "Carry Learner's License when practicing",
      "Practice with licensed driver in four-wheeler",
      "Know traffic rules thoroughly for test",
      "Renew license before expiry to avoid penalty",
      "International permit requires valid Indian license",
      "Update address within 30 days of relocation",
    ],
  },

  "Ration Card": {
    overview:
      "Ration Card is issued under Public Distribution System (PDS) to provide subsidized food grains and other commodities. It also serves as address and identity proof. Applications are processed by state Food & Civil Supplies departments.",
    timeline: "30-45 days for new application, 15-30 days for corrections",
    steps: [
      {
        title: "Application Submission",
        description: "Submit application to local Food & Civil Supplies office",
        details: [
          "Fill prescribed application form",
          "Submit all required documents",
          "Pay application fee if applicable",
          "Get acknowledgment receipt",
          "Note application reference number",
        ],
      },
      {
        title: "Verification Process",
        description: "Field verification by designated officer",
        details: [
          "Officer visits for address verification",
          "Income and family details verification",
          "Cross-check with submitted documents",
          "Neighbor verification if required",
        ],
      },
      {
        title: "Approval Process",
        description: "Application review and approval by competent authority",
        details: [
          "Document scrutiny by department",
          "Eligibility verification based on income",
          "Family composition verification",
          "Final approval by designated officer",
        ],
      },
      {
        title: "Card Issuance",
        description: "Ration card issued and delivered",
        details: [
          "Card printed with family details",
          "Delivered to registered address",
          "SMS notification for collection",
          "Card valid for specified period",
        ],
      },
    ],
    documents: [
      {
        category: "Identity Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Voter ID",
          "Passport",
          "PAN Card",
          "Driving License",
          "Bank Passbook with Photo",
        ],
      },
      {
        category: "Address Proof (Any One)",
        items: [
          "Aadhaar Card",
          "Voter ID",
          "Utility Bills",
          "Property Documents",
          "Rent Agreement",
          "Bank Statement",
          "Telephone Bill",
        ],
      },
      {
        category: "Income Proof",
        items: [
          "Salary Certificate",
          "Income Certificate from Tehsildar",
          "ITR/Form 16",
          "Bank Statement",
          "Pension Certificate",
          "Self-employment Declaration",
        ],
      },
    ],
    forms: [
      {
        name: "New Ration Card Application",
        description: "For new ration card application",
        where: "Food & Civil Supplies Office, Online Portal",
      },
      {
        name: "Ration Card Transfer Form",
        description: "For transferring ration card to new address",
        where: "Food & Civil Supplies Office",
      },
      {
        name: "Correction Form",
        description: "For correcting details in existing ration card",
        where: "Food & Civil Supplies Office",
      },
    ],
    tips: [
      "Check income eligibility criteria for your state",
      "Aadhaar linking is mandatory in most states",
      "Keep family income certificates updated",
      "Report changes in family composition promptly",
      "Use only designated fair price shops",
      "Carry Aadhaar card for subsidized purchases",
      "Renew/update card as per state guidelines",
    ],
  },

  "Scholarship Forms": {
    overview:
      "Government and private scholarships support students' education based on merit, need, or category. Applications are submitted through respective portals like National Scholarship Portal, state portals, or institution-specific systems.",
    timeline: "30-90 days depending on scholarship type and verification",
    steps: [
      {
        title: "Scholarship Search",
        description: "Find suitable scholarships based on eligibility",
        details: [
          "Check National Scholarship Portal",
          "Visit state government portals",
          "Check institution-specific scholarships",
          "Verify eligibility criteria carefully",
          "Note application deadlines",
        ],
      },
      {
        title: "Document Preparation",
        description: "Gather all required documents",
        details: [
          "Academic certificates and marksheets",
          "Income certificates and bank details",
          "Category certificates if applicable",
          "Aadhaar card and other ID proofs",
          "Recent passport size photographs",
        ],
      },
      {
        title: "Online Application",
        description: "Fill and submit scholarship application form",
        details: [
          "Create account on scholarship portal",
          "Fill application form accurately",
          "Upload all required documents",
          "Review and submit application",
          "Take printout of submitted application",
        ],
      },
      {
        title: "Verification & Disbursement",
        description: "Institute verification and scholarship disbursement",
        details: [
          "Institute verifies student details",
          "Documents verification by nodal officer",
          "Approval by scholarship sanctioning authority",
          "Amount credited to student's bank account",
        ],
      },
    ],
    documents: [
      {
        category: "Academic Documents",
        items: [
          "10th/12th Marksheets",
          "Graduation/PG Certificates",
          "Current Year Admission Receipt",
          "Fee Receipt/Structure",
          "Bonafide Certificate",
          "Migration Certificate",
        ],
      },
      {
        category: "Income & Identity Proof",
        items: [
          "Income Certificate",
          "Aadhaar Card",
          "Bank Passbook",
          "Caste Certificate (if applicable)",
          "Domicile Certificate",
          "BPL Card (if applicable)",
        ],
      },
      {
        category: "Special Category Documents",
        items: [
          "Disability Certificate",
          "Single Girl Child Certificate",
          "Minority Certificate",
          "EWS Certificate",
          "Sports/Cultural Achievement Certificates",
        ],
      },
    ],
    forms: [
      {
        name: "NSP Application Form",
        description: "Common application for central government scholarships",
        where: "scholarships.gov.in",
      },
      {
        name: "State Scholarship Forms",
        description: "State-specific scholarship applications",
        where: "Respective State Portals",
      },
      {
        name: "Merit-based Applications",
        description: "Applications for merit scholarships",
        where: "Institution/Organization Portals",
      },
    ],
    tips: [
      "Apply early before deadline to avoid server issues",
      "Keep scanned documents ready in required format",
      "Ensure bank account is linked with Aadhaar",
      "Check income limits for different scholarships",
      "Maintain good academic performance for renewal",
      "Keep all certificates updated and valid",
      "Follow up with institute's nodal officer for verification",
    ],
  },
  "Competitive Exam Services": {
    overview:
      "Competitive exams are essential gateways for government jobs, public sector recruitment, and higher education. This includes UPSC, SSC, banking, railways, police, state services, and more. We help candidates with application form filling, document uploads, and exam updates.",
    timeline: "Varies by exam; typically 15-60 days for application window",
    steps: [
      {
        title: "Exam Notification Review",
        description: "Identify the right exam and understand its eligibility",
        details: [
          "Check official exam notification PDF",
          "Note important dates, eligibility criteria, and syllabus",
          "Understand age limits, category relaxation, and reservation rules",
          "Decide whether you're applying under General/OBC/SC/ST/EWS",
        ],
      },
      {
        title: "Online Application Filling",
        description: "Complete the exam form on the official portal",
        details: [
          "Register on the exam’s official website (e.g., UPSC, SSC, IBPS)",
          "Fill in personal, educational, and contact details",
          "Upload scanned photo, signature, and other required documents",
          "Pay the application fee via online mode",
          "Submit and download confirmation page",
        ],
      },
      {
        title: "Document Upload & Correction",
        description: "Upload supporting documents as per guidelines",
        details: [
          "Follow file size and format instructions (usually JPG, PDF)",
          "Correct any errors before final submission (if correction window opens)",
          "Keep a printout of the final form and payment receipt",
          "Some exams require thumb impression or handwritten declaration",
        ],
      },
      {
        title: "Admit Card & Exam Prep",
        description: "Download hall ticket and prepare using syllabus",
        details: [
          "Download admit card before exam date from portal",
          "Read all instructions printed on hall ticket",
          "Revise syllabus, attempt mock tests, and review past papers",
          "Reach center with ID proof and required documents",
        ],
      },
    ],
    documents: [
      {
        category: "Mandatory Documents",
        items: [
          "Aadhaar Card",
          "10th & 12th Marksheet",
          "Graduation Certificate/Marksheet",
          "Recent Passport Size Photo",
          "Scanned Signature",
          "Category Certificate (SC/ST/OBC/EWS, if applicable)",
          "PWD Certificate (if applicable)",
        ],
      },
      {
        category: "Optional Documents",
        items: [
          "Domicile Certificate",
          "Experience Certificate (if needed)",
          "NOC (for employed candidates)",
          "Disability Certificate (for special quota)",
          "Income Certificate (for EWS)",
        ],
      },
    ],
    forms: [
      {
        name: "UPSC Online Application Form",
        description: "Apply for IAS, IPS, IFS and other civil services",
        where: "https://upsconline.nic.in",
      },
      {
        name: "SSC Exam Form",
        description: "CGL, CHSL, MTS, GD Constable & other staff exams",
        where: "https://ssc.nic.in",
      },
      {
        name: "IBPS & Bank Exams",
        description: "Clerk, PO, RRB & SO recruitment exams",
        where: "https://ibps.in",
      },
      {
        name: "Railway Recruitment",
        description: "RRB NTPC, Group D, ALP and other posts",
        where: "https://rrbcdg.gov.in",
      },
      {
        name: "State Government Jobs",
        description: "Various state PSC, Police & Teacher Recruitment",
        where: "Respective State PSC Websites",
      },
    ],
    tips: [
      "Apply early — don't wait for last date to avoid server issues",
      "Check scanned documents for clarity and correct file size",
      "Use your own and active mobile number & email for OTPs",
      "Double-check category and reservation details before submitting",
      "Save confirmation page and payment receipt",
      "Follow exam pattern and syllabus from official sources",
      "Join Telegram or WhatsApp groups for exam updates (optional)",
    ],
  },
};

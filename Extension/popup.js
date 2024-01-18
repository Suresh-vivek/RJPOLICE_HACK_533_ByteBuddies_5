// popup.js

const unsafeWebsites = [
  "ucoz.com",
  "https://ww17.17ebook.co/",
  "sapo.pt",
  "http://ww1.aladel.net/",
  "bpwhamburgorchardpark.org",
  "clicnews.com",
  "amazonaws.com",
  "dfwdiesel.net",
  "divineenterprises.net",
  "fantasticfilms.ru",
  "blogspot.de",
  "gardensrestaurantandcatering.com",
  "ginedis.com",
  "gncr.org",
  "hdvideoforums.org",
  "hihanin.com",
  "kingfamilyphotoalbum.com",
  "4shared.com",
  "likaraoke.com",
  "mactep.org",
  "magic4you.nu",
  "sendspace.com",
  "marbling.pe.kr",
  "nacjalneg.info",
  "pronline.ru",
  "purplehoodie.com",
  "qsng.cn",
  "comcast.net",
  "seksburada.net",
  "sportsmansclub.net",
  "stock888.cn",
  "fc2.com",
  "https://aboutus.com/Tathli.com",
  "teamclouds.com",
  "texaswhitetailfever.com",
  "hotfile.com",
  "wadefamilytree.org",
  "xnescat.info",
  "mail.ru",
  "yt118.com",
];

const helplineData = [
  { institution: "National Cyber Crime Helpline Number", helplines: ["1930"] },
  {
    institution: "Crop Insurance Schemes -Chola Insurance",
    helplines: ["18002005544"],
  },
  {
    institution: "Crop Insurance Schemes -HDFC ERGO",
    helplines: ["18002700700"],
  },
  {
    institution: "Crop Insurance Schemes -ICICI Lombard",
    helplines: ["18002666"],
  },
  {
    institution: "Crop Insurance Schemes -L&T insurance",
    helplines: ["18002095846"],
  },
  {
    institution: "Crop Insurance Schemes -TATA AIG Insurance",
    helplines: ["18002667780"],
  },
  {
    institution: "Crop Insurance Schemes-IFFCO Tokio",
    helplines: ["18001035499"],
  },
  {
    institution: "Crop Insurance Schemes- Future Generali",
    helplines: ["1800220233", "18605003333"],
  },
  {
    institution: "Crop Insurance Schemes-Reliance general",
    helplines: ["18003009"],
  },
  {
    institution: "Crop Insurance Schemes-Royal Sundaram",
    helplines: ["18604250000"],
  },
  { institution: "IMD Weather on Web", helplines: ["18001801717"] },
  { institution: "Kisan Call Centre", helplines: ["18001801551"] },
  { institution: "ABN AMRO", helplines: ["1800112224"] },
  {
    institution: "Allahabad Bank ATM",
    helplines: ["1800220363", "180042500000"],
  },
  {
    institution: "Axis Bank",
    helplines: ["18604258888", "18001035577", "18604195555", "18605005555"],
  },
  {
    institution: "Canara Bank",
    helplines: ["1800446000", "080-22115526", "080-22221581"],
  },
  { institution: "Citibank", helplines: ["1800442265", "18602102484"] },
  { institution: "Corporation Bank", helplines: ["1800443555"] },
  { institution: "Development Credit Bank", helplines: ["1800225769"] },
  { institution: "HDFC Bank", helplines: ["1800227227", "7070022222"] },
  { institution: "ICICI Bank", helplines: ["1800333499"] },
  { institution: "ICICI Bank NRI", helplines: ["1800224848"] },
  { institution: "IDBI Bank", helplines: ["1800116999"] },
  { institution: "Indian Bank", helplines: ["18004251400"] },
  { institution: "ING Vysya", helplines: ["1800449900"] },
  { institution: "Kotak Mahindra Bank", helplines: ["1800226022"] },
  { institution: "Lord Krishna Bank", helplines: ["1800112300"] },
  { institution: "Punjab National Bank", helplines: ["1800122222"] },
  {
    institution: "State Bank of India",
    helplines: ["18002337933", "1800111109", "1800112211"],
  },
  { institution: "Syndicate Bank", helplines: ["1800446655"] },
  {
    institution: "Central Board of Secondary Education (CBSE)-Helpline",
    helplines: ["1800117002"],
  },
  { institution: "ICRI Global Research", helplines: ["18001030006"] },
  {
    institution: "India Post Office -Logistics Post Service",
    helplines: ["1800119888"],
  },
  {
    institution: "India Post Office- Speed Post Customer care",
    helplines: ["1800119888"],
  },
  { institution: "Amazon", helplines: ["180030009009", "1800 419 7355"] },
  { institution: "Flipkart", helplines: ["1800-208-9898"] },
  { institution: "Myntra", helplines: ["806 156 1999"] },
  { institution: "Meesho", helplines: ["80-61799600"] },
  { institution: "Nykaa", helplines: ["1800-267-4444"] },
  { institution: "FirstCry", helplines: ["0135-350 1300"] },
  { institution: "Book MY Show", helplines: ["+9102261445050"] },
  { institution: "Anti Ragging Helpline", helplines: ["18001805522"] },
  {
    institution: "Central Board of Secondary Education (CBSE)- Helpline",
    helplines: ["1800118002"],
  },
  {
    institution: "Kendriya Vidyalaya Sangathan (Delhi region-KVS)",
    helplines: ["1800118002"],
  },
  {
    institution: "National Commission for Minority Educational Institutions",
    helplines: ["1800110088"],
  },
  {
    institution:
      "National Council of Educational Research and Training (NCERT)",
    helplines: ["1800111265"],
  },
  {
    institution: "National Institute of Open Schooling (NIOS)",
    helplines: ["18001809393"],
  },
  {
    institution: "Navodaya Vidyalaya Samiti (NVS)",
    helplines: ["18003450092"],
  },
  {
    institution: "The National Institute of Open Schooling (NIOS)",
    helplines: ["18001809393"],
  },
  {
    institution: "University Grant Commission - Helpline",
    helplines: ["18001805522"],
  },
  {
    institution:
      "Virtual Call Centre of National Council for Teacher Education (NCTE)",
    helplines: ["1800110039"],
  },
  { institution: "National Number", helplines: ["1912"] },
  {
    institution: "South Bihar Power Distribution Company Limited(SBPDCL)",
    helplines: ["1912"],
  },
  {
    institution: "North Bihar Power Distribution Company Limited(NBPDCL)",
    helplines: ["1912"],
  },
  {
    institution: "Purvanchal Vidyut Vitaran Nigam Limited(PuVVNL)",
    helplines: ["1912", "1800-180-5025", "8010968292"],
  },
  {
    institution: "Madhyanchal Vidyut Vitaran Nigam Limited(MVVNL)",
    helplines: ["1912", "1800-1800-440", "8010924203"],
  },
  {
    institution: "Pashchimanchal Vidyut Vitaran Nigam Limited(PVVNL)",
    helplines: ["1912", "1800-180-3002", "7859804803"],
  },
  {
    institution: "Dakshinanchal Vidyut Vitaran Nigam Limited(DVVNL)",
    helplines: ["1912", "1800-180-3023", "8010957826"],
  },
  {
    institution: "Kanpur Electricity Supply Company Limited(KESCo)",
    helplines: ["1912", "1800-180-1912"],
  },
  {
    institution: "Uttar Haryana Bijli Vitran Nigam",
    helplines: ["1912", "18001801550"],
  },
  {
    institution: "Dakshin Haryana Bijli Vitran Nigam",
    helplines: ["18001804334", "1912"],
  },
  { institution: "Rajasthan Electricity Board", helplines: ["18001806127"] },
  { institution: "Delhi Distribution Limited", helplines: ["1800-208-9124"] },
  {
    institution: "Central Building Research Institute (CBRI)",
    helplines: ["18002700800"],
  },
  {
    institution: "Indian Renewable Energy Development Agency Limited (IREDA)",
    helplines: ["1800111442"],
  },
  { institution: "AIIMS", helplines: ["1800 11 6117"] },
  { institution: "AIDS Help Line", helplines: ["1800 11 1097"] },
  { institution: "AIDS Helpline", helplines: ["1097"] },
  { institution: "Air Asia", helplines: ["1860 500 8000"] },
  { institution: "Air India", helplines: ["1800 180 1407"] },
  { institution: "Ambulance", helplines: ["102"] },
  { institution: "Anti Corruption Bureau", helplines: ["1800 222 021"] },
  { institution: "Anti Poison(New Delhi)", helplines: ["1066"] },
  { institution: "Anti Ragging Helpline", helplines: ["1800 1805 522"] },
  { institution: "CBSE-Helpline", helplines: ["1800117 002"] },
  {
    institution: "Central Building Research Institute(CBRI)",
    helplines: ["1800 270 0800"],
  },
  {
    institution:
      "Central Pension Accounting Open Pradhan Mantri Jan-Dhan Yojana",
    helplines: ["1800 117 788", "1800 11 0001", "1800 180 1111"],
  },
  {
    institution: "Central Vigilance Commission",
    helplines: ["1800 11 0180", "1800 110 180"],
  },
  {
    institution: "Community Radio Facilitation Centre",
    helplines: ["1800 11 6346"],
  },
  { institution: "Core Centre Helpline", helplines: ["1800 180 4566"] },
  { institution: "Crime Stopper", helplines: ["1090"] },
  { institution: "Delhi VAT Helpline", helplines: ["1800 110 066"] },
  { institution: "Disaster Management Services", helplines: ["108"] },
  { institution: "Earthquake/Flood/Disaster", helplines: ["011-24363260"] },
  { institution: "Electricity Complaint", helplines: ["155333"] },
  { institution: "e-procurement", helplines: ["1800 3070 2232"] },
  {
    institution: "Ex. Serviceman Contributory Health Scheme( ECHS)-Helpline",
    helplines: ["1800 114 115"],
  },
  { institution: "Fire", helplines: ["101"] },
  { institution: "Free Service Ambulance", helplines: ["102"] },
  {
    institution: "Help centre on Gold schemes of Government of India",
    helplines: ["1800 180 0000"],
  },
  { institution: "Hindustan Petroleum", helplines: ["1800 233 3777"] },
  { institution: "ICRI Global Research", helplines: ["1800 103 0006"] },
  { institution: "IMD Weather on Web", helplines: ["1800 180 1717"] },
  {
    institution: "India Post Office-Speed Post Customer care",
    helplines: ["1800 119 888"],
  },
  {
    institution: "Indian Railways Reservation(IRCTC)",
    helplines: ["1800 111 139"],
  },
  { institution: "Indane Gas", helplines: ["1800 233 3555"] },
  { institution: "Indra Prastha Gas Ltd.(IGL)", helplines: ["1860 180 1817"] },
  {
    institution: "Insurance Regulatory and Development Authority (IRDA)",
    helplines: ["1800 425 4372"],
  },
  { institution: "IREDA", helplines: ["1800 111 442"] },
  { institution: "Jan Aushadhi", helplines: ["1800 180 8080"] },
  { institution: "Jet Airways", helplines: ["1800 225 522"] },
  {
    institution: "Kendriya Vidhalaya Sangathan(KVS)",
    helplines: ["1800 118 002"],
  },
  { institution: "Kisan Call Centre", helplines: ["1551", "1800 180 1551"] },
  { institution: "LPG Leak Helpline", helplines: ["1906"] },
  { institution: "Mahanagar Gas", helplines: ["1800 229 944"] },
  {
    institution: "Mahatma Gandhi National Rural Employment Guarantee Act NREGA",
    helplines: ["1800 110 707"],
  },
  {
    institution: "National AIDS Control Organisation (NACO)",
    helplines: ["1800 41 91800"],
  },
  { institution: "National Career Service", helplines: ["1800 425 1514"] },
  {
    institution: "National Commission For Minority Educational Institutions",
    helplines: ["1800 110 088"],
  },
  { institution: "National Consumer Helpline", helplines: ["1800 114 000"] },
  { institution: "National Emergency Number", helplines: ["112"] },
  {
    institution: "National Minorities Development & Finance Corporation",
    helplines: ["14402"],
  },
  { institution: "NCERT", helplines: ["1800 111 265"] },
  { institution: "Passport Seva Kendra", helplines: ["1800 2581 800"] },
  { institution: "PAN Card", helplines: ["1800 180 1961"] },
  { institution: "Pharma Jan Samadhan", helplines: ["1800 111 255"] },
  { institution: "Police", helplines: ["100"] },
  {
    institution: "Pradhan Mantri Awas Yojana (Gramin)",
    helplines: ["1800 116 446"],
  },
  { institution: "Railway Accident Emergency Services", helplines: ["1072"] },
  { institution: "Railway Enquiry", helplines: ["131/135"] },
  { institution: "Railway Reservation", helplines: ["139"] },
  {
    institution: "Registrar General and Census Commissioner India",
    helplines: ["1800 110 111"],
  },
  { institution: "Senior Citizen Helpline", helplines: ["1291"] },
  { institution: "Startup India", helplines: ["1800 115 565"] },
  {
    institution: "Tax Return Prepares (TRPS)",
    helplines: ["1800 102 3738", "1800 113 738"],
  },
  { institution: "Telecom Monitoring Cell", helplines: ["1800 110 420"] },
  { institution: "TIN Verification Number", helplines: ["1800 180 1961"] },
  { institution: "UIDAI Adhar Card ", helplines: ["1800 300 1947"] },

  { institution: "Women Helpline", helplines: ["1091"] },
  { institution: "Women Helpline(Domestic Abuse)", helplines: ["181"] },
  { institution: "Credit Guarantee Trust", helplines: ["1800222659"] },
  { institution: "LIC Housing Finance", helplines: ["1800440005"] },
  {
    institution: "National Minorities Development & Finance Corporation",
    helplines: ["14402"],
  },
  { institution: "SBI Mutual Fund", helplines: ["1800223040"] },
  { institution: "Aaykar Sampark Kendra (Ask)", helplines: ["1961"] },
  { institution: "Aids Helpline", helplines: ["1097"] },
  { institution: "Aids Help Line Service", helplines: ["1097"] },
  { institution: "Air Accident", helplines: ["1071"] },
  { institution: "Air Ambulance", helplines: ["+919540161344"] },
  {
    institution:
      "Air India (Confirmation / Cancellation Enquiry) (Called Party)",
    helplines: ["1414"],
  },
  { institution: "All in One Emergency Number", helplines: ["112"] },
  { institution: "Ambulance", helplines: ["102"] },
  { institution: "Anti Corruption Helpline", helplines: ["1031"] },
  { institution: "Anti Poison", helplines: ["1066"] },
  { institution: "Anti Ragging Helpline", helplines: ["18001805522"] },
  { institution: "Anti-Terror Helpline/Alert All India", helplines: ["1090"] },
  {
    institution: "Billing Complaint Center",
    helplines: ["166", "1660/69", "1671/73"],
  },
  { institution: "Blood Bank Information", helplines: ["1910"] },
  { institution: "Catastrophe & Trauma Service", helplines: ["1099"] },
  { institution: "Central Accident and Trauma Services", helplines: ["1099"] },
  {
    institution: "Central Relief Commissioner for Natural Calamities",
    helplines: ["1070"],
  },
  { institution: "Child Abuse Hotline", helplines: ["1098"] },
  {
    institution: "Control Room of District Collector/Magistrate",
    helplines: ["1077"],
  },
  { institution: "Directory Inquiry Service", helplines: ["197"] },
  { institution: "Dial a Doctor", helplines: ["1911"] },
  { institution: "Disaster Management", helplines: ["108"] },
  { institution: "Drug De-Addiction", helplines: ["1800110031"] },
  { institution: "Earth Quake Help Line Service", helplines: ["1092"] },
  { institution: "Electricity Complaints", helplines: ["155333"] },
  { institution: "Election Commission of India", helplines: ["1950"] },
  {
    institution: "Emergency Relief Center on National Highways",
    helplines: ["1033"],
  },
  { institution: "Eye Bank Information Service", helplines: ["1919"] },
  { institution: "Eye Donation", helplines: ["1919"] },
  { institution: "Fire", helplines: ["101"] },
  {
    institution: "For Any Queries Related to Landline Telephone, Isdn Etc.",
    helplines: ["1500"],
  },
  {
    institution:
      "For Any Theft or Harassment, Nuisance Caused Due to Smoking or Alcohol Consumption on Train",
    helplines: ["1322"],
  },
  { institution: "Free Phone Inquiry", helplines: ["1600"] },

  {
    institution: "Help centre on Gold schemes of Government of India",
    helplines: ["1800 180 0000"],
  },
  { institution: "Hindustan Petroleum", helplines: ["1800 233 3777"] },
  { institution: "Hospital On Wheels", helplines: ["104"] },
  { institution: "IMD Weather on Web", helplines: ["1800 180 1717"] },
  {
    institution: "India Post Office-Speed Post Customer care",
    helplines: ["1800 119 888"],
  },
  { institution: "Indian Airlines", helplines: ["1407"] },
  { institution: "Indian Army Help Line", helplines: ["1904"] },
  { institution: "Indian Oil Help Line", helplines: ["155233"] },
  {
    institution: "Indian Railways Reservation(IRCTC)",
    helplines: ["1800 111 139"],
  },
  { institution: "Indane Gas", helplines: ["1800 233 3555"] },
  { institution: "Indra Prastha Gas Ltd.(IGL)", helplines: ["1860 180 1817"] },
  {
    institution: "Insurance Regulatory and Development Authority (IRDA)",
    helplines: ["155255", "18004254732"],
  },
  { institution: "IREDA", helplines: ["1800 111 442"] },
  { institution: "IRCTC Help Line", helplines: ["1800111139"] },
  { institution: "LIC of India", helplines: ["1251"] },
  { institution: "Leased Circuit Fault Booking", helplines: ["1918"] },
  { institution: "Leased Circuit Fault Booking (WTR)", helplines: ["1958"] },
  { institution: "LPG Emergency Helpline Number", helplines: ["1906"] },
  { institution: "LPG Leak Helpline", helplines: ["1906"] },
  {
    institution: "Mahatma Gandhi National Rural Employment Guarantee Act NREGA",
    helplines: ["1800 110 707"],
  },
  {
    institution: "Mannkibaat On the Toll-Free Number",
    helplines: ["18003000780"],
  },
  {
    institution: "Maritime Search and Rescue Control Room of Coastal Guard",
    helplines: ["1718"],
  },
  { institution: "MILITARY POLICE HELP LINE", helplines: ["155200"] },
  {
    institution: "National AIDS Control Organisation (NACO)",
    helplines: ["1800 41 91800"],
  },
  { institution: "National Career Service", helplines: ["1800 425 1514"] },
  {
    institution: "National Commission For Minority Educational Institutions",
    helplines: ["1800 110 088"],
  },
  { institution: "National Consumer Helpline", helplines: ["1800 114 000"] },
  {
    institution: "National Directory Enquiry (NDQ) Service",
    helplines: ["1583"],
  },
  { institution: "National Emergency Number", helplines: ["112"] },
  { institution: "National Health Helpline", helplines: ["18001801104"] },
  {
    institution: "National Minorities Development & Finance Corporation",
    helplines: ["14402"],
  },
  { institution: "Natural Disaster Control Room", helplines: ["1096"] },
  {
    institution: "Navodaya Vidyalaya Samiti(NVS)",
    helplines: ["1800 345 0092"],
  },
  { institution: "NCERT", helplines: ["1800 111 265"] },
  { institution: "Police", helplines: ["100"] },
  { institution: "Railway", helplines: ["1512"] },
  {
    institution:
      "Railway Helpline for Arrival/Departure and Reservation Services",
    helplines: ["133"],
  },
  { institution: "Railway Inquiry", helplines: ["139"] },

  { institution: "Std Complaints", helplines: ["1582"] },
  { institution: "Water Supply Complaint", helplines: ["1916"] },
  { institution: "Women's Helpline", helplines: ["181"] },
  { institution: "Anti Corruption Bureau", helplines: ["1800222021"] },
  { institution: "Central Pension Accounting Open", helplines: ["1800117788"] },
  { institution: "Core Centre Helpline", helplines: ["18001804566"] },
  { institution: "Delhi VAT Helpline", helplines: ["1800110066"] },
  {
    institution: "e-procurement",
    helplines: ["1800 3070 2232", "180030702232"],
  },
  {
    institution: "Ex. Serviceman Contributory Health Scheme( ECHS)-Helpline",
    helplines: ["1800114115"],
  },
  {
    institution: "Help centre on Gold schemes of Government of India",
    helplines: ["18001800000"],
  },
  { institution: "Income Tax Department", helplines: ["18004252229"] },
  {
    institution: "Income Tax-e-Filling",
    helplines: ["180042500025", "180042500025"],
  },
  {
    institution: "Indian Railway Reservation (IRCTC)",
    helplines: ["180011113"],
  },
  {
    institution: "UHBVN Helpline Number",
    helpline: ["18001801550"],
  },
  {
    institution: "Insurance Regulatory and Development Authority (IRDA)",
    helplines: ["18004254372"],
  },
  { institution: "Jan Aushadhi", helplines: ["18001808080"] },
  {
    institution:
      "Mahatma Gandhi National Rural Employment Guarantee Act (NREGA)",
    helplines: ["1800110707"],
  },
  {
    institution: "National Career Service",
    helplines: ["1800-425-1514 (Tue-Sun 08:00 AM to 08:00 PM)"],
  },
  { institution: "National Consumer Helpline", helplines: ["1800114000"] },
  {
    institution: "National Institute of Open Schooling (NIOS)",
    helplines: ["18001809393"],
  },
  { institution: "Passport Seva Kendra", helplines: ["18002581800"] },
  { institution: "PAN Card", helplines: ["18001801961", "18001801961"] },
  {
    institution: "Pradhan Mantri Jan-Dhan Yojana",
    helplines: ["1800117788", "1800 11 0001 / 1800 180 1111"],
  },
  {
    institution: "Pradhan Mantri Awas Yojana (Gramin)",
    helplines: ["1800-11-6446"],
  },
  {
    institution: "Registrar General and Census Commissioner India",
    helplines: ["1800 110 111"],
  },
  {
    institution: "Startup India Hub - Working Hours :10:00 AM to 5:30 PM",
    helplines: ["1800115565"],
  },
  { institution: "TIN Verification Number", helplines: ["18001801961"] },
  {
    institution: "Tax Return Prepares (TRPS)",
    helplines: ["18001023738", "1800113738", "18001023738 / 1800113738"],
  },
  {
    institution: "Telecom Monitoring Cell",
    helplines: ["1800110420", "1800110420"],
  },
  { institution: "Telecom Monitoring Cell", helplines: ["1800110420"] },
  { institution: "UIDAI -Aadhar card", helplines: ["18003001947"] },
  {
    institution: "University Grant Commission - Helpline",
    helplines: ["18001805522"],
  },
  {
    institution:
      "Virtual Call Centre of National Council for Teacher Education (NCTE)",
    helplines: ["1800110039"],
  },
  { institution: "AIDS Help Line", helplines: ["1800 11 1097"] },
  { institution: "AIIMS", helplines: ["1800 11 6117"] },
  { institution: "H1N1 FLU(Swine Flu) -Helpline", helplines: ["1800 11 4377"] },
  {
    institution: "National AIDS Control Organisation (NACO)",
    helplines: ["1800 41 91800"],
  },
  { institution: "Pharma Jan Samadhan", helplines: ["1800111255"] },
  {
    institution: "Reproductive health, Family planning and infant health",
    helplines: ["1800 11 6555"],
  },
  { institution: "VIMHANS-Child Care", helplines: ["1800 11 3444"] },
  {
    institution: "ANDAMAN & NICOBAR",
    helplines: ["8900910411"],
  },
  {
    institution: "ANDHRA PRADESH",
    helplines: ["0863-2340156"],
  },
  {
    institution: "ARUNACHAL PRADESH",
    helplines: ["9436040703"],
  },
  {
    institution: "ASSAM",
    helplines: ["0361-2521618"],
  },
  {
    institution: "BIHAR",
    helplines: ["0612-2238098"],
  },
  {
    institution: "CHANDIGARH",
    helplines: ["0172-2749900"],
  },
  {
    institution: "CHHATTISGARH",
    helplines: ["9479191785"],
  },
  {
    institution: "DADRA & NAGAR HAVELI AND DAMAN & DIU",
    helplines: ["0260-2220140"],
  },
  {
    institution: "DELHI",
    helplines: ["011-20892633"],
  },
  {
    institution: "GOA",
    helplines: ["0832-2420883"],
  },
  {
    institution: "GUJARAT",
    helplines: ["079-23250798"],
  },
  {
    institution: "HARYANA",
    helplines: ["0172-2524058"],
  },
  {
    institution: "HIMACHAL PRADESH",
    helplines: ["0177-2622205"],
  },
  {
    institution: "JAMMU & KASHMIR",
    helplines: ["0191-25822926"],
  },
  {
    institution: "JHARKHAND",
    helplines: ["0651-2220060"],
  },
  {
    institution: "KARNATAKA",
    helplines: ["08022942475"],
  },
  {
    institution: "KERALA",
    helplines: ["0471-2300042"],
  },
  {
    institution: "LADAKH",
    helplines: ["01982-260888"],
  },
  {
    institution: "LAKSHADWEEP",
    helplines: ["04896262258"],
  },
  {
    institution: "MADHYA PRADESH",
    helplines: ["0755-2770248"],
  },
  {
    institution: "MAHARASHTRA",
    helplines: ["022-22160080"],
  },
  {
    institution: "MANIPUR",
    helplines: ["0385-2444888"],
  },
  {
    institution: "MEGHALAYA",
    helplines: ["9485115118"],
  },
  {
    institution: "MIZORAM",
    helplines: ["0389-2334682"],
  },
  {
    institution: "NAGALAND",
    helplines: ["6009308003"],
  },
  {
    institution: "ODISHA",
    helplines: ["0671-2304834"],
  },
  {
    institution: "PUDUCHERRY",
    helplines: ["0413-2231313"],
  },
  {
    institution: "PUNJAB",
    helplines: ["0172-2226258"],
  },
  {
    institution: "RAJASTHAN",
    helplines: ["0141-2601122"],
  },
  {
    institution: "SIKKIM",
    helplines: ["8695622134"],
  },
  {
    institution: "TAMIL NADU",
    helplines: ["044-29580300"],
  },
  {
    institution: "TELANGANA",
    helplines: ["040-23211966"],
  },
  {
    institution: "TRIPURA",
    helplines: ["0381-2376979"],
  },
  {
    institution: "UTTARAKHAND",
    helplines: ["0135-2655900"],
  },
  {
    institution: "UTTAR PRADESH",
    helplines: ["0522-2390538"],
  },
  {
    institution: "WEST BENGAL",
    helplines: ["033-24790255"],
  },
  { institution: "Bharat Gas", helplines: ["1800222725"] },
  { institution: "Hindustan Petroleum", helplines: ["18002333777"] },
  { institution: "Indane Gas", helplines: ["18002333555"] },
  { institution: "Indra Prastha Gas Ltd.(IGL)", helplines: ["18601801817"] },
  { institution: "Mahanagar Gas", helplines: ["1800229944"] },
  {
    institution: "Andhra Pradesh",
    helplines: ["1800-425-0082 / 1800-425-2977"],
  },
  { institution: "Arunachal Pradesh", helplines: ["1800-345-3601"] },
  { institution: "Assam", helplines: ["1800-345-3611"] },
  { institution: "Bihar", helplines: ["1800-345-6188"] },
  { institution: "Chattisgarh", helplines: ["1800-233-3663"] },
  { institution: "Delhi", helplines: ["011-23379266"] },
  { institution: "Gujarat", helplines: ["1800-233-0222"] },
  { institution: "Haryana", helplines: ["1800-180-2087"] },
  { institution: "Himachal Pradesh", helplines: ["1800-180-8026"] },
  { institution: "Karnataka", helplines: ["1800-425-9339 / 1967"] },
  { institution: "Kerala", helplines: ["1800-425-1550"] },
  { institution: "Madhya Pradesh", helplines: ["155343"] },
  { institution: "Maharashtra", helplines: ["1800-22-2262"] },
  { institution: "Mizoram", helplines: ["1800-231-1792"] },
  { institution: "Nagaland", helplines: ["1800-345-3701"] },
  { institution: "Orissa", helplines: ["1800-345-6724 / 6760"] },
  { institution: "Rajasthan", helplines: ["1800-180-6030"] },
  { institution: "Sikkim", helplines: ["1800-345-3209 / 1800-345-3236"] },
  { institution: "Tamil Nadu", helplines: ["044-2859-2828"] },
  { institution: "Uttar Pradesh", helplines: ["1800-180-0300"] },
  { institution: "West Bengal", helplines: ["1800-345-2808"] },
  { institution: "Videocon", helplines: ["121", "198"] },
  {
    institution: "BSNL",
    helplines: ["1503", "1800-180-1503", "1800-345-1504"],
  },
  { institution: "MTNL", helplines: ["1504", "22221504"] },
  {
    institution: "Vodafone",
    helplines: ["199", "+91 9713097130", "198", "111"],
  },
  { institution: "Tata Docomo", helplines: ["121", "1860-266-5555"] },
  { institution: "Airtel", helplines: ["198", "1800-103-4444"] },
  { institution: "Aircel", helplines: ["121", "198", "9716012345"] },
  { institution: "Reliance", helplines: ["1800 -100- 3333", "198"] },
  { institution: "Idea", helplines: ["198", "18002700000"] },
  { institution: "JIO", helplines: ["199", "1800-88-9999"] },
  { institution: "Air Asia", helplines: ["18605008000"] },
  { institution: "Air India", helplines: ["18001801407"] },
  {
    institution: "Indian Railway Reservation (IRCTC)",
    helplines: ["180011113"],
  },
  { institution: "Jet Airways", helplines: ["1800225522"] },
  { institution: "Spice Jet", helplines: ["18001803333"] },
  { institution: "SBI Customer Care Service", helplines: ["18001234"] },
];

function checkHelplineNumber(number) {
  let found = false;

  // Check if the number is present in the helplineData array
  for (const entry of helplineData) {
    if (entry.helplines && entry.helplines.includes(number)) {
      found = true;
      document.getElementById("number-data").innerText =
        entry.institution + " - " + number;
      break; // Exit the loop once a match is found
    }
  }

  // If the number is not found after checking all entries
  if (!found) {
    document.getElementById("number-data").innerText =
      "Number not present in the dataset.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("checkNumberButton")
    .addEventListener("click", function () {
      // Get the input value from the user
      const numberInput = document.getElementById("numberInput").value;
      checkHelplineNumber(numberInput);
    });
});

function checkSafety(url) {
  // Check if the current URL matches any unsafe websites
  if (unsafeWebsites.some((unsafe) => url.includes(unsafe))) {
    document.getElementById("result").innerText = "This website is unsafe!";
    return;
  }

  // Make a request to Google Safe Browsing API for additional safety check
  fetch(
    "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyDokrjCc-sJ5nRDKmm_azTAdlcqj2s6VyY",
    {
      method: "POST",
      body: JSON.stringify({
        client: {
          clientId: "Safenet",
          clientVersion: "1.0",
        },
        threatInfo: {
          threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
          platformTypes: ["PLATFORM_TYPE_UNSPECIFIED"],
          threatEntryTypes: ["LINUX"],
          threatEntries: [{ url: url }],
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.matches && data.matches.length > 0) {
        document.getElementById("result").innerText =
          "This website may not be safe!";
      } else {
        document.getElementById("result").innerText =
          "This website seems safe.";
      }
    })
    .catch((error) => {
      console.error("Error checking safety:", error);
      document.getElementById("result").innerText = "Error checking safety.";
    });
}

function getCurrentTabUrl(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    callback(url);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("checkSafetyButton")
    .addEventListener("click", function () {
      getCurrentTabUrl(checkSafety);
    });

  document
    .getElementById("reportFraudButton")
    .addEventListener("click", function () {
      const reportForm = document.getElementById("reportForm");
      reportForm.classList.toggle("hidden");
    });

  document
    .getElementById("fraudForm")
    .addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the user's contact number from the form
      const contactNo = document.getElementById("contactNo").value;
      console.log(contactNo);
      console.log("HI");

      // Other form handling logic (you can send data to your server here)

      // Send acknowledgment to the user via Twilio
      fetch("http://localhost:3005/sendAcknowledgment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactNo: contactNo,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          console.log(data);

          // Hide the form and show a confirmation message
          document.getElementById("reportForm").classList.add("hidden");
          document.getElementById("formSubmittedMessage").innerText =
            "Form submitted! Acknowledgment sent to the user.";
        })
        .catch((error) => console.error("Error:", error));
    });
});

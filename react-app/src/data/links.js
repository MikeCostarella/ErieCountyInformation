// Erie County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-16

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

export const AUDITOR_VENDOR = "ISSG";

export const LINKS = [
  // ---------- Government ----------
  { name: "Erie County (Official Site)", category: "Government", subcategory: "County", url: "https://www.eriecounty.oh.gov/", description: "Official Erie County government website — offices, departments, and services." },
  { name: "County Auditor", category: "Government", subcategory: "County", url: "https://auditor.eriecounty.oh.gov/", description: "Property values, tax records, real-estate search, and county finances." },
  { name: "Auditor Parcel Viewer (GIS)", category: "Government", subcategory: "County", url: "https://augis.eriecounty.oh.gov/apps/parcelviewer", description: "Interactive county GIS map — search parcels by owner, address, or number." },
  { name: "Board of Elections", category: "Government", subcategory: "Elections", url: "https://elections.erie.gov/", description: "Voter registration, ballots, polling places, and election results." },
  { name: "City of Sandusky", category: "Government", subcategory: "Municipal", url: "https://www.cityofsandusky.com/", description: "Official site of Sandusky, the county seat." },

  // ---------- Education ----------
  { name: "Sandusky Library", category: "Education", subcategory: "Library", url: "https://www.sanduskylib.org/", description: "Public library — books, e-resources, archives, and programs." },
  { name: "BGSU Firelands", category: "Education", subcategory: "College", url: "https://www.bgsu.edu/firelands.html", description: "Bowling Green State University's regional campus in Huron." },
  { name: "EHOVE Career Center", category: "Education", subcategory: "Career-Tech", url: "https://www.ehove.net/", description: "Career and technical education for high-school and adult students." },
  { name: "Sandusky City Schools", category: "Education", subcategory: "K-12", url: "https://www.scs-k12.net/", description: "Public school district serving the city of Sandusky." },

  // ---------- Health ----------
  { name: "Firelands Health", category: "Health", subcategory: "Hospital", url: "https://www.firelands.com/", description: "Firelands Regional Medical Center — the county's full-service hospital." },
  { name: "Erie County Health Department", category: "Health", subcategory: "Public Health", url: "https://eriecohealthohio.com/", description: "Public-health services, clinics, vital records, and programs." },

  // ---------- Business & Economy ----------
  { name: "Erie County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.eriecountychamber.com/", description: "Local business network of ~600 members, directory, and events." },
  { name: "Erie County Economic Development Corp", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.eriecountyedc.org/", description: "Lead economic-development organization — sites, incentives, and business support." },

  // ---------- Recreation & Tourism ----------
  { name: "Erie MetroParks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://eriemetroparks.org/", description: "County park district — 14 parks and preserves, trails, and programs." },
  { name: "Shores & Islands Ohio", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.shoresandislands.com/", description: "Lake Erie Shores & Islands visitor and tourism guide." },
  { name: "Cedar Point", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.cedarpoint.com/", description: "Landmark amusement park on the Sandusky lakefront." },

  // ---------- News & Media ----------
  { name: "Sandusky Register", category: "News & Media", subcategory: "Newspaper", url: "https://sanduskyregister.com/", description: "Daily newspaper covering Sandusky and Erie County." },
];

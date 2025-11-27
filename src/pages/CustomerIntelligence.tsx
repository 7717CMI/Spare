import { useState, useRef, useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

interface CustomerIntelligenceProps {
  onNavigate: (page: string) => void
}

type Proposition = 'proposition1' | 'proposition2' | 'proposition3'

interface DistributorData {
  customerName: string
  companyName: string
  companySize: string
  industryArea: string
  annualRevenue: string
  geographicsFootprint: string
  keyContact: string
  designation: string
  emailAddress: string
  phoneWhatsApp: string
  linkedinProfile: string
  websiteURL: string
  // Proposition 1 fields
  customerType?: string
  headquarter?: string
  employeeSize?: string
  revenueSize?: string
  businessLocation?: string
  // Legacy fields
  sNo?: number
  yearEstablished?: string
  headquarters?: string
  citiesRegionsCovered?: string
  ownershipType?: string
  noOfEmployees?: string
  revenueTurnover?: string
  // Proposition 1 ATM fields
  parentGroupBrand?: string
  bankType?: string
  regionCountryPresence?: string
  atmFootprint?: string
  // Proposition 2 Fleet Information fields
  aircraftTypesAndBrand?: string
  fleetHandlingCapacity?: string
  aircraftAgeAndEngineType?: string
  fleetUtilization?: string
  maintenanceModel?: string
  // Proposition 2 Tech Stack & Vendor Landscape fields (legacy)
  existingATMSwitchCoreBanking?: string
  existingReconciliationPlatform?: string
  atmCITServiceProviders?: string
  // Proposition 2 Purchasing Behaviour fields (legacy)
  primaryMotivation?: string
  upcomingInitiativesTriggers?: string
  shrinkFraudRiskSensitivity?: string
  decisionMakers?: string
  procurementModel?: string
  budgetApprox?: string
  // Current IT Infrastructure Landscape (for Proposition 1, 2 & 3)
  numberOfEndpoints?: string
  numberOfServers?: string
  cloudFootprint?: string
  dataCenterDetails?: string
  networkSize?: string
  existingSecurityStack?: string
  backupAndDRSetup?: string
  emailAndCollaborationPlatforms?: string
  businessApplicationsUsed?: string
  complianceRequirements?: string
  recentITIncidents?: string
  itRoadmapPlans?: string
  digitalTransformationInitiatives?: string
  // Current IT Support Setup (for Proposition 2 & 3)
  presenceOfInternalIT?: string
  existingMSPVendor?: string
  currentSLAsAndSupportHours?: string
  painPointsWithExistingIT?: string
  averageDowntimeIncidents?: string
  existingMonitoringTools?: string
  // Financial & Commercial Datapoints (for Proposition 3)
  itBudgetApprox?: string
  currentITSpend?: string
  currentMSPContractValue?: string
  pricingPreferences?: string
  renewalContractTimeline?: string
  budgetAvailableForOutsourcing?: string
  // Product Portfolio fields (for Proposition 2 only)
  keyProductCategories?: string
  productSegmentCapsules?: string
  priceSegment?: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType?: string
  supportedDeviceTypes?: string
  preferredTransactionModel?: string
  technologyPreference?: string
  integrationNeeds?: string
  deploymentTimeline?: string
  serviceExpectations?: string
  constraintsRiskConsiderations?: string
  // CMI Insights (for Proposition 3)
  customerBenchmarkingSummary?: string
  additionalCommercialNotes?: string
  // Proposition 3 - Procurement & Purchasing Details (6 columns)
  procurementContacts?: string
  sparePartsProcurement?: string
  frequencyOfShipments?: string
  procurementRatioOfSpareParts?: string
  technicalFeaturesOfSpareParts?: string
  preferredPaymentTerms?: string
  // Proposition 3 - Growth & Expansion Plans (4 columns)
  newAirlinesAcquisition?: string
  partnershipWithDistributorOrSuppliers?: string
  othersIfAny?: string
  // Legacy fields (kept for backward compatibility with existing data)
  keyInternationalLocalBrands?: string
  exclusiveNonExclusivePartnership?: string
  durationOfBrandPartnerships?: string
  onlineChannel?: string
  offlineChannel?: string
  northIndia?: string
  westIndia?: string
  southIndia?: string
  eastIndia?: string
  strengths?: string
  weaknesses?: string
  opportunities?: string
  threats?: string
  futureExpansionPlans?: string
  competitiveBenchmarking?: string
  additionalComments?: string
  internationalNicheBrands?: string
  durationOfPartnership?: string
}

export function CustomerIntelligence({ onNavigate }: CustomerIntelligenceProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const [activeProposition, setActiveProposition] = useState<Proposition>('proposition1')
  const topScrollRef = useRef<HTMLDivElement>(null)
  const tableScrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const topScroll = topScrollRef.current
    const tableScroll = tableScrollRef.current
    
    if (topScroll && tableScroll) {
      const table = tableScroll.querySelector('table')
      if (table) {
        const scrollContent = topScroll.querySelector('div')
        if (scrollContent) {
          scrollContent.style.width = `${table.scrollWidth}px`
        }
      }
    }
  }, [activeProposition])

  // Sample data based on the image - Aviation Industry Data
  const proposition1Data: DistributorData[] = [
    {
      sNo: 1,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'SkyWings Airlines',
      customerName: 'SkyWings Airlines',
      headquarter: 'Mumbai, India',
      employeeSize: '12,500',
      revenueSize: '$2.8 Billion',
      businessLocation: 'Mumbai, Delhi, Bangalore',
      websiteURL: 'www.skywingsair.com',
      keyContact: 'Rajesh Sharma',
      designation: 'VP Procurement',
      emailAddress: 'rajesh.sharma@skywingsair.com',
      phoneWhatsApp: '+91 98765 43210',
      linkedinProfile: 'linkedin.com/in/rajeshsharma',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$2.8 Billion',
      geographicsFootprint: 'South Asia, Middle East, Southeast Asia'
    },
    {
      sNo: 2,
      customerType: 'MRO Service Providers',
      companyName: 'AeroTech MRO Services',
      customerName: 'AeroTech MRO Services',
      headquarter: 'Singapore',
      employeeSize: '3,200',
      revenueSize: '$450 Million',
      businessLocation: 'Singapore, Malaysia, Thailand',
      websiteURL: 'www.aerotechmro.com',
      keyContact: 'Michael Chen',
      designation: 'Director of Operations',
      emailAddress: 'michael.chen@aerotechmro.com',
      phoneWhatsApp: '+65 9123 4567',
      linkedinProfile: 'linkedin.com/in/michaelchen',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$450 Million',
      geographicsFootprint: 'Asia Pacific'
    },
    {
      sNo: 3,
      customerType: 'Component Repair Shops',
      companyName: 'PrecisionAero Components',
      customerName: 'PrecisionAero Components',
      headquarter: 'Dubai, UAE',
      employeeSize: '850',
      revenueSize: '$120 Million',
      businessLocation: 'Dubai, Abu Dhabi',
      websiteURL: 'www.precisionaero.ae',
      keyContact: 'Ahmed Al Mansoor',
      designation: 'General Manager',
      emailAddress: 'ahmed@precisionaero.ae',
      phoneWhatsApp: '+971 50 123 4567',
      linkedinProfile: 'linkedin.com/in/ahmedmansoor',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$120 Million',
      geographicsFootprint: 'Middle East, North Africa'
    },
    {
      sNo: 4,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'GlobalJet Leasing',
      customerName: 'GlobalJet Leasing',
      headquarter: 'Dublin, Ireland',
      employeeSize: '450',
      revenueSize: '$1.2 Billion',
      businessLocation: 'Dublin, London, New York',
      websiteURL: 'www.globaljetleasing.com',
      keyContact: 'Patrick O\'Brien',
      designation: 'Chief Commercial Officer',
      emailAddress: 'patrick.obrien@globaljetleasing.com',
      phoneWhatsApp: '+353 1 234 5678',
      linkedinProfile: 'linkedin.com/in/patrickobrien',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.2 Billion',
      geographicsFootprint: 'Europe, Americas, Asia'
    },
    {
      sNo: 5,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'SwiftGround Services',
      customerName: 'SwiftGround Services',
      headquarter: 'Frankfurt, Germany',
      employeeSize: '2,800',
      revenueSize: '$380 Million',
      businessLocation: 'Frankfurt, Munich, Berlin',
      websiteURL: 'www.swiftground.de',
      keyContact: 'Hans Mueller',
      designation: 'Head of Procurement',
      emailAddress: 'hans.mueller@swiftground.de',
      phoneWhatsApp: '+49 170 1234567',
      linkedinProfile: 'linkedin.com/in/hansmueller',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$380 Million',
      geographicsFootprint: 'Europe'
    },
    {
      sNo: 6,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Pacific Airways',
      customerName: 'Pacific Airways',
      headquarter: 'Sydney, Australia',
      employeeSize: '8,500',
      revenueSize: '$1.9 Billion',
      businessLocation: 'Sydney, Melbourne, Brisbane',
      websiteURL: 'www.pacificairways.com.au',
      keyContact: 'Sarah Thompson',
      designation: 'Supply Chain Director',
      emailAddress: 'sarah.thompson@pacificairways.com.au',
      phoneWhatsApp: '+61 412 345 678',
      linkedinProfile: 'linkedin.com/in/sarahthompson',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.9 Billion',
      geographicsFootprint: 'Australia, New Zealand, Pacific Islands'
    },
    {
      sNo: 7,
      customerType: 'MRO Service Providers',
      companyName: 'TurboMaint Solutions',
      customerName: 'TurboMaint Solutions',
      headquarter: 'Dallas, USA',
      employeeSize: '4,100',
      revenueSize: '$680 Million',
      businessLocation: 'Dallas, Miami, Los Angeles',
      websiteURL: 'www.turbomaint.com',
      keyContact: 'John Williams',
      designation: 'VP Technical Services',
      emailAddress: 'john.williams@turbomaint.com',
      phoneWhatsApp: '+1 214 555 0123',
      linkedinProfile: 'linkedin.com/in/johnwilliams',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$680 Million',
      geographicsFootprint: 'North America, Latin America'
    },
    {
      sNo: 8,
      customerType: 'Component Repair Shops',
      companyName: 'AviParts Repair Center',
      customerName: 'AviParts Repair Center',
      headquarter: 'Amsterdam, Netherlands',
      employeeSize: '620',
      revenueSize: '$85 Million',
      businessLocation: 'Amsterdam, Rotterdam',
      websiteURL: 'www.aviparts.nl',
      keyContact: 'Jan van der Berg',
      designation: 'Operations Manager',
      emailAddress: 'jan.vanderberg@aviparts.nl',
      phoneWhatsApp: '+31 6 1234 5678',
      linkedinProfile: 'linkedin.com/in/janvanderberg',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$85 Million',
      geographicsFootprint: 'Western Europe'
    },
    {
      sNo: 9,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'AeroLease International',
      customerName: 'AeroLease International',
      headquarter: 'Hong Kong',
      employeeSize: '380',
      revenueSize: '$950 Million',
      businessLocation: 'Hong Kong, Shanghai, Tokyo',
      websiteURL: 'www.aerolease.hk',
      keyContact: 'David Wong',
      designation: 'Managing Director',
      emailAddress: 'david.wong@aerolease.hk',
      phoneWhatsApp: '+852 9876 5432',
      linkedinProfile: 'linkedin.com/in/davidwong',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$950 Million',
      geographicsFootprint: 'Asia Pacific'
    },
    {
      sNo: 10,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'AirServ Ground Solutions',
      customerName: 'AirServ Ground Solutions',
      headquarter: 'Toronto, Canada',
      employeeSize: '1,950',
      revenueSize: '$290 Million',
      businessLocation: 'Toronto, Vancouver, Montreal',
      websiteURL: 'www.airservground.ca',
      keyContact: 'Emily Carter',
      designation: 'Procurement Manager',
      emailAddress: 'emily.carter@airservground.ca',
      phoneWhatsApp: '+1 416 555 7890',
      linkedinProfile: 'linkedin.com/in/emilycarter',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$290 Million',
      geographicsFootprint: 'Canada, Northern USA'
    },
    {
      sNo: 11,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Atlas Global Airlines',
      customerName: 'Atlas Global Airlines',
      headquarter: 'Istanbul, Turkey',
      employeeSize: '6,200',
      revenueSize: '$1.4 Billion',
      businessLocation: 'Istanbul, Ankara, Antalya',
      websiteURL: 'www.atlasglobal.com.tr',
      keyContact: 'Mehmet Yilmaz',
      designation: 'Chief Procurement Officer',
      emailAddress: 'mehmet.yilmaz@atlasglobal.com.tr',
      phoneWhatsApp: '+90 532 123 4567',
      linkedinProfile: 'linkedin.com/in/mehmetyilmaz',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.4 Billion',
      geographicsFootprint: 'Europe, Middle East, Central Asia'
    },
    {
      sNo: 12,
      customerType: 'MRO Service Providers',
      companyName: 'JetCare Maintenance',
      customerName: 'JetCare Maintenance',
      headquarter: 'Sao Paulo, Brazil',
      employeeSize: '2,400',
      revenueSize: '$320 Million',
      businessLocation: 'Sao Paulo, Rio de Janeiro',
      websiteURL: 'www.jetcaremaint.com.br',
      keyContact: 'Carlos Silva',
      designation: 'Technical Director',
      emailAddress: 'carlos.silva@jetcaremaint.com.br',
      phoneWhatsApp: '+55 11 98765 4321',
      linkedinProfile: 'linkedin.com/in/carlossilva',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$320 Million',
      geographicsFootprint: 'South America'
    },
    {
      sNo: 13,
      customerType: 'Component Repair Shops',
      companyName: 'SkyParts Engineering',
      customerName: 'SkyParts Engineering',
      headquarter: 'Bangalore, India',
      employeeSize: '540',
      revenueSize: '$65 Million',
      businessLocation: 'Bangalore, Hyderabad',
      websiteURL: 'www.skypartseng.in',
      keyContact: 'Priya Krishnan',
      designation: 'Business Development Head',
      emailAddress: 'priya.krishnan@skypartseng.in',
      phoneWhatsApp: '+91 99001 23456',
      linkedinProfile: 'linkedin.com/in/priyakrishnan',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$65 Million',
      geographicsFootprint: 'India, South Asia'
    },
    {
      sNo: 14,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'Nordic Aviation Partners',
      customerName: 'Nordic Aviation Partners',
      headquarter: 'Oslo, Norway',
      employeeSize: '290',
      revenueSize: '$780 Million',
      businessLocation: 'Oslo, Stockholm, Copenhagen',
      websiteURL: 'www.nordicaviation.no',
      keyContact: 'Erik Larsson',
      designation: 'Fleet Manager',
      emailAddress: 'erik.larsson@nordicaviation.no',
      phoneWhatsApp: '+47 912 34 567',
      linkedinProfile: 'linkedin.com/in/eriklarsson',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$780 Million',
      geographicsFootprint: 'Scandinavia, Northern Europe'
    },
    {
      sNo: 15,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'AeroGround Asia',
      customerName: 'AeroGround Asia',
      headquarter: 'Bangkok, Thailand',
      employeeSize: '1,650',
      revenueSize: '$210 Million',
      businessLocation: 'Bangkok, Phuket, Chiang Mai',
      websiteURL: 'www.aerogroundasia.co.th',
      keyContact: 'Somchai Patel',
      designation: 'Regional Director',
      emailAddress: 'somchai.patel@aerogroundasia.co.th',
      phoneWhatsApp: '+66 81 234 5678',
      linkedinProfile: 'linkedin.com/in/somchaipatel',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$210 Million',
      geographicsFootprint: 'Southeast Asia'
    }
  ]

  // Proposition 2 data - Aviation Industry Data with Fleet Information
  const proposition2Data: DistributorData[] = [
    {
      sNo: 1,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Horizon Air International',
      customerName: 'Horizon Air International',
      headquarter: 'New Delhi, India',
      employeeSize: '15,200',
      revenueSize: '$3.5 Billion',
      businessLocation: 'Delhi, Mumbai, Chennai, Kolkata',
      websiteURL: 'www.horizonairintl.com',
      keyContact: 'Vikram Malhotra',
      designation: 'Chief Operations Officer',
      emailAddress: 'vikram.malhotra@horizonairintl.com',
      phoneWhatsApp: '+91 98100 12345',
      linkedinProfile: 'linkedin.com/in/vikrammalhotra',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$3.5 Billion',
      geographicsFootprint: 'India, Middle East, Europe, Southeast Asia',
      aircraftTypesAndBrand: 'Boeing 737 MAX, Airbus A320neo, A321XLR',
      fleetHandlingCapacity: '145 Aircraft',
      aircraftAgeAndEngineType: '4.2 years avg, CFM LEAP-1A/1B',
      fleetUtilization: '12.5 hours/day',
      maintenanceModel: 'Mixed (In-house + Third-party MRO)'
    },
    {
      sNo: 2,
      customerType: 'MRO Service Providers',
      companyName: 'SkyTech Aviation Services',
      customerName: 'SkyTech Aviation Services',
      headquarter: 'Kuala Lumpur, Malaysia',
      employeeSize: '4,800',
      revenueSize: '$620 Million',
      businessLocation: 'Kuala Lumpur, Jakarta, Manila',
      websiteURL: 'www.skytechaviation.my',
      keyContact: 'Lee Wei Ming',
      designation: 'VP Engineering',
      emailAddress: 'weiming.lee@skytechaviation.my',
      phoneWhatsApp: '+60 12 345 6789',
      linkedinProfile: 'linkedin.com/in/leeweiming',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$620 Million',
      geographicsFootprint: 'Southeast Asia, Oceania',
      aircraftTypesAndBrand: 'Airbus A320 Family, Boeing 737NG/MAX',
      fleetHandlingCapacity: '200+ Aircraft/year',
      aircraftAgeAndEngineType: 'Services 2-15 year old aircraft, CFM56/LEAP',
      fleetUtilization: 'N/A - MRO Provider',
      maintenanceModel: 'Full MRO Services (Base + Line + Component)'
    },
    {
      sNo: 3,
      customerType: 'Component Repair Shops',
      companyName: 'AeroComponent Solutions',
      customerName: 'AeroComponent Solutions',
      headquarter: 'Chennai, India',
      employeeSize: '720',
      revenueSize: '$95 Million',
      businessLocation: 'Chennai, Bangalore',
      websiteURL: 'www.aerocomponent.in',
      keyContact: 'Suresh Raman',
      designation: 'Managing Director',
      emailAddress: 'suresh.raman@aerocomponent.in',
      phoneWhatsApp: '+91 98410 56789',
      linkedinProfile: 'linkedin.com/in/sureshraman',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$95 Million',
      geographicsFootprint: 'India, Sri Lanka, Bangladesh',
      aircraftTypesAndBrand: 'Multi-platform (Boeing, Airbus, ATR)',
      fleetHandlingCapacity: '5,000+ components/year',
      aircraftAgeAndEngineType: 'All ages, specializing in legacy components',
      fleetUtilization: 'N/A - Component Shop',
      maintenanceModel: 'Component Overhaul & Repair'
    },
    {
      sNo: 4,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'AsiaJet Capital',
      customerName: 'AsiaJet Capital',
      headquarter: 'Singapore',
      employeeSize: '520',
      revenueSize: '$1.8 Billion',
      businessLocation: 'Singapore, Hong Kong, Dublin',
      websiteURL: 'www.asiajetcapital.com',
      keyContact: 'Jennifer Tan',
      designation: 'Head of Fleet Management',
      emailAddress: 'jennifer.tan@asiajetcapital.com',
      phoneWhatsApp: '+65 8123 4567',
      linkedinProfile: 'linkedin.com/in/jennifertan',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.8 Billion',
      geographicsFootprint: 'Asia Pacific, Middle East, Africa',
      aircraftTypesAndBrand: 'Airbus A320/A321, Boeing 787, ATR 72',
      fleetHandlingCapacity: '185 Aircraft Portfolio',
      aircraftAgeAndEngineType: '6.8 years avg, Mixed engine types',
      fleetUtilization: 'Leased to 45+ airlines',
      maintenanceModel: 'Lessee-managed with oversight'
    },
    {
      sNo: 5,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'AirPort Services Global',
      customerName: 'AirPort Services Global',
      headquarter: 'Dubai, UAE',
      employeeSize: '3,400',
      revenueSize: '$480 Million',
      businessLocation: 'Dubai, Doha, Riyadh, Muscat',
      websiteURL: 'www.airportservicesglobal.ae',
      keyContact: 'Omar Al Rashid',
      designation: 'Director of Operations',
      emailAddress: 'omar.alrashid@airportservicesglobal.ae',
      phoneWhatsApp: '+971 55 987 6543',
      linkedinProfile: 'linkedin.com/in/omaralrashid',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$480 Million',
      geographicsFootprint: 'Middle East, North Africa',
      aircraftTypesAndBrand: 'All major commercial aircraft types',
      fleetHandlingCapacity: '850+ flights/day',
      aircraftAgeAndEngineType: 'All aircraft ages serviced',
      fleetUtilization: 'N/A - Ground Handler',
      maintenanceModel: 'Line Maintenance & Transit Checks'
    },
    {
      sNo: 6,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Southern Cross Airways',
      customerName: 'Southern Cross Airways',
      headquarter: 'Melbourne, Australia',
      employeeSize: '9,800',
      revenueSize: '$2.2 Billion',
      businessLocation: 'Melbourne, Sydney, Perth, Auckland',
      websiteURL: 'www.southerncrossair.com.au',
      keyContact: 'James Mitchell',
      designation: 'VP Fleet & Technical',
      emailAddress: 'james.mitchell@southerncrossair.com.au',
      phoneWhatsApp: '+61 400 123 456',
      linkedinProfile: 'linkedin.com/in/jamesmitchell',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$2.2 Billion',
      geographicsFootprint: 'Australia, New Zealand, Pacific Islands, Asia',
      aircraftTypesAndBrand: 'Boeing 787-9, Airbus A330neo, E190-E2',
      fleetHandlingCapacity: '95 Aircraft',
      aircraftAgeAndEngineType: '5.5 years avg, GEnx, Trent 7000, PW1900G',
      fleetUtilization: '11.8 hours/day',
      maintenanceModel: 'In-house heavy maintenance, outsourced components'
    },
    {
      sNo: 7,
      customerType: 'MRO Service Providers',
      companyName: 'EuroTech Aerospace',
      customerName: 'EuroTech Aerospace',
      headquarter: 'Hamburg, Germany',
      employeeSize: '5,600',
      revenueSize: '$890 Million',
      businessLocation: 'Hamburg, Paris, Madrid, Warsaw',
      websiteURL: 'www.eurotechaero.eu',
      keyContact: 'Klaus Schmidt',
      designation: 'Chief Technical Officer',
      emailAddress: 'klaus.schmidt@eurotechaero.eu',
      phoneWhatsApp: '+49 151 1234 5678',
      linkedinProfile: 'linkedin.com/in/klausschmidt',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$890 Million',
      geographicsFootprint: 'Europe, CIS Countries',
      aircraftTypesAndBrand: 'Airbus A320/A330/A350, Boeing 737/777/787',
      fleetHandlingCapacity: '350+ Aircraft/year',
      aircraftAgeAndEngineType: 'Full lifecycle support, all engine types',
      fleetUtilization: 'N/A - MRO Provider',
      maintenanceModel: 'Full MRO + Engine Shop + Modifications'
    },
    {
      sNo: 8,
      customerType: 'Component Repair Shops',
      companyName: 'Pacific Parts International',
      customerName: 'Pacific Parts International',
      headquarter: 'Los Angeles, USA',
      employeeSize: '890',
      revenueSize: '$145 Million',
      businessLocation: 'Los Angeles, Phoenix, Seattle',
      websiteURL: 'www.pacificpartsinternational.com',
      keyContact: 'Maria Rodriguez',
      designation: 'VP Sales & Business Development',
      emailAddress: 'maria.rodriguez@pacificpartsinternational.com',
      phoneWhatsApp: '+1 310 555 0199',
      linkedinProfile: 'linkedin.com/in/mariarodriguez',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$145 Million',
      geographicsFootprint: 'North America, Latin America',
      aircraftTypesAndBrand: 'Boeing 737/757/767, Airbus A320',
      fleetHandlingCapacity: '8,500+ components/year',
      aircraftAgeAndEngineType: 'Specializing in mature aircraft support',
      fleetUtilization: 'N/A - Component Shop',
      maintenanceModel: 'Component Repair, Exchange & Pooling'
    },
    {
      sNo: 9,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'TransAtlantic Leasing Corp',
      customerName: 'TransAtlantic Leasing Corp',
      headquarter: 'Dublin, Ireland',
      employeeSize: '680',
      revenueSize: '$2.4 Billion',
      businessLocation: 'Dublin, New York, Singapore, Dubai',
      websiteURL: 'www.transatlanticleasing.ie',
      keyContact: 'Sean O\'Connor',
      designation: 'Chief Commercial Officer',
      emailAddress: 'sean.oconnor@transatlanticleasing.ie',
      phoneWhatsApp: '+353 87 123 4567',
      linkedinProfile: 'linkedin.com/in/seanoconnor',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$2.4 Billion',
      geographicsFootprint: 'Global - 65+ countries',
      aircraftTypesAndBrand: 'Boeing 737 MAX, 787; Airbus A320neo, A350',
      fleetHandlingCapacity: '280 Aircraft Portfolio',
      aircraftAgeAndEngineType: '4.5 years avg, Latest generation engines',
      fleetUtilization: 'Leased to 80+ airlines worldwide',
      maintenanceModel: 'Full lifecycle management programs'
    },
    {
      sNo: 10,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'Nordic Ground Services',
      customerName: 'Nordic Ground Services',
      headquarter: 'Stockholm, Sweden',
      employeeSize: '2,200',
      revenueSize: '$340 Million',
      businessLocation: 'Stockholm, Oslo, Copenhagen, Helsinki',
      websiteURL: 'www.nordicgroundservices.se',
      keyContact: 'Anna Lindqvist',
      designation: 'Head of Technical Operations',
      emailAddress: 'anna.lindqvist@nordicgroundservices.se',
      phoneWhatsApp: '+46 70 123 4567',
      linkedinProfile: 'linkedin.com/in/annalindqvist',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$340 Million',
      geographicsFootprint: 'Scandinavia, Baltic States',
      aircraftTypesAndBrand: 'All narrow-body and wide-body types',
      fleetHandlingCapacity: '620+ flights/day',
      aircraftAgeAndEngineType: 'All aircraft ages serviced',
      fleetUtilization: 'N/A - Ground Handler',
      maintenanceModel: 'Line Maintenance & AOG Support'
    },
    {
      sNo: 11,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Sahara Wings Aviation',
      customerName: 'Sahara Wings Aviation',
      headquarter: 'Cairo, Egypt',
      employeeSize: '5,400',
      revenueSize: '$980 Million',
      businessLocation: 'Cairo, Alexandria, Luxor, Sharm El Sheikh',
      websiteURL: 'www.saharawings.com.eg',
      keyContact: 'Ahmed Hassan',
      designation: 'Director of Maintenance',
      emailAddress: 'ahmed.hassan@saharawings.com.eg',
      phoneWhatsApp: '+20 100 123 4567',
      linkedinProfile: 'linkedin.com/in/ahmedhassan',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$980 Million',
      geographicsFootprint: 'North Africa, Middle East, Southern Europe',
      aircraftTypesAndBrand: 'Airbus A320/A321neo, Boeing 737-800',
      fleetHandlingCapacity: '52 Aircraft',
      aircraftAgeAndEngineType: '7.2 years avg, CFM56/LEAP-1A',
      fleetUtilization: '10.5 hours/day',
      maintenanceModel: 'Outsourced to regional MROs'
    },
    {
      sNo: 12,
      customerType: 'MRO Service Providers',
      companyName: 'AmeriTech Aviation',
      customerName: 'AmeriTech Aviation',
      headquarter: 'Atlanta, USA',
      employeeSize: '6,200',
      revenueSize: '$1.1 Billion',
      businessLocation: 'Atlanta, Dallas, Miami, Chicago',
      websiteURL: 'www.ameritechaviation.com',
      keyContact: 'Robert Johnson',
      designation: 'SVP Operations',
      emailAddress: 'robert.johnson@ameritechaviation.com',
      phoneWhatsApp: '+1 404 555 0188',
      linkedinProfile: 'linkedin.com/in/robertjohnson',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.1 Billion',
      geographicsFootprint: 'Americas, Caribbean',
      aircraftTypesAndBrand: 'Boeing 737/757/767/777, Airbus A320/A330',
      fleetHandlingCapacity: '400+ Aircraft/year',
      aircraftAgeAndEngineType: 'All generations, CFM/GE/PW/RR engines',
      fleetUtilization: 'N/A - MRO Provider',
      maintenanceModel: 'Heavy Maintenance + Modifications + Painting'
    },
    {
      sNo: 13,
      customerType: 'Component Repair Shops',
      companyName: 'AsiaComp Technical',
      customerName: 'AsiaComp Technical',
      headquarter: 'Taipei, Taiwan',
      employeeSize: '580',
      revenueSize: '$78 Million',
      businessLocation: 'Taipei, Taoyuan',
      websiteURL: 'www.asiacomp.com.tw',
      keyContact: 'Kevin Lin',
      designation: 'General Manager',
      emailAddress: 'kevin.lin@asiacomp.com.tw',
      phoneWhatsApp: '+886 912 345 678',
      linkedinProfile: 'linkedin.com/in/kevinlin',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$78 Million',
      geographicsFootprint: 'Taiwan, China, Japan, Korea',
      aircraftTypesAndBrand: 'Airbus A320/A330, Boeing 737/777',
      fleetHandlingCapacity: '4,200+ components/year',
      aircraftAgeAndEngineType: 'Focus on 5-20 year old aircraft parts',
      fleetUtilization: 'N/A - Component Shop',
      maintenanceModel: 'Avionics & Hydraulics Specialist'
    },
    {
      sNo: 14,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'Emirates Capital Aviation',
      customerName: 'Emirates Capital Aviation',
      headquarter: 'Abu Dhabi, UAE',
      employeeSize: '420',
      revenueSize: '$1.5 Billion',
      businessLocation: 'Abu Dhabi, Dubai, London',
      websiteURL: 'www.emiratescapitalaviation.ae',
      keyContact: 'Khalid Al Maktoum',
      designation: 'Investment Director',
      emailAddress: 'khalid.almaktoum@emiratescapitalaviation.ae',
      phoneWhatsApp: '+971 50 876 5432',
      linkedinProfile: 'linkedin.com/in/khalialmaktoum',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.5 Billion',
      geographicsFootprint: 'Middle East, Africa, South Asia',
      aircraftTypesAndBrand: 'Boeing 777/787, Airbus A350/A380',
      fleetHandlingCapacity: '120 Aircraft Portfolio',
      aircraftAgeAndEngineType: '5.2 years avg, GE90/GEnx/Trent XWB',
      fleetUtilization: 'Leased to 35+ carriers',
      maintenanceModel: 'Premium maintenance programs included'
    },
    {
      sNo: 15,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'LatAm Ground Operations',
      customerName: 'LatAm Ground Operations',
      headquarter: 'Mexico City, Mexico',
      employeeSize: '2,850',
      revenueSize: '$390 Million',
      businessLocation: 'Mexico City, Cancun, Bogota, Lima',
      websiteURL: 'www.latamgroundops.com',
      keyContact: 'Carlos Mendez',
      designation: 'Regional Operations Manager',
      emailAddress: 'carlos.mendez@latamgroundops.com',
      phoneWhatsApp: '+52 55 1234 5678',
      linkedinProfile: 'linkedin.com/in/carlosmendez',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$390 Million',
      geographicsFootprint: 'Mexico, Central America, South America',
      aircraftTypesAndBrand: 'All commercial aircraft types',
      fleetHandlingCapacity: '720+ flights/day',
      aircraftAgeAndEngineType: 'All aircraft ages serviced',
      fleetUtilization: 'N/A - Ground Handler',
      maintenanceModel: 'Line Maintenance & Ramp Services'
    }
  ]

  // Proposition 3 data - same structure as Proposition 1 and 2 plus Procurement & Purchasing Details, Growth & Expansion Plans, and CMI Insights
  const proposition3Data: DistributorData[] = [
    {
      sNo: 1,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Eagle Star Aviation',
      customerName: 'Eagle Star Aviation',
      headquarter: 'Johannesburg, South Africa',
      employeeSize: '7,800',
      revenueSize: '$1.6 Billion',
      businessLocation: 'Johannesburg, Cape Town, Durban, Nairobi',
      websiteURL: 'www.eaglestaraviation.co.za',
      keyContact: 'Thabo Ndlovu',
      designation: 'VP Supply Chain',
      emailAddress: 'thabo.ndlovu@eaglestaraviation.co.za',
      phoneWhatsApp: '+27 82 123 4567',
      linkedinProfile: 'linkedin.com/in/thabondlovu',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.6 Billion',
      geographicsFootprint: 'Sub-Saharan Africa, Indian Ocean Islands',
      procurementContacts: 'Procurement Team: procurement@eaglestaraviation.co.za',
      sparePartsProcurement: 'OEM Direct (60%), Authorized Distributors (30%), PMA (10%)',
      frequencyOfShipments: 'Weekly scheduled + AOG as needed',
      procurementRatioOfSpareParts: 'Rotables 45%, Consumables 35%, Expendables 20%',
      technicalFeaturesOfSpareParts: 'FAA/EASA certified, OEM traceable documentation required',
      preferredPaymentTerms: 'Net 60, Letter of Credit for new suppliers',
      newAirlinesAcquisition: 'Planning 12 new A320neo by 2026',
      partnershipWithDistributorOrSuppliers: 'Open to regional distribution partnerships',
      othersIfAny: 'Interested in consignment stock programs',
      customerBenchmarkingSummary: 'Strong regional player with growth potential',
      additionalCommercialNotes: 'Decision cycle: 4-6 weeks, Budget approval Q1 annually'
    },
    {
      sNo: 2,
      customerType: 'MRO Service Providers',
      companyName: 'GlobalTech Aviation MRO',
      customerName: 'GlobalTech Aviation MRO',
      headquarter: 'Miami, USA',
      employeeSize: '5,200',
      revenueSize: '$780 Million',
      businessLocation: 'Miami, Bogota, Panama City, Sao Paulo',
      websiteURL: 'www.globaltechmro.com',
      keyContact: 'Ricardo Fernandez',
      designation: 'Director of Procurement',
      emailAddress: 'ricardo.fernandez@globaltechmro.com',
      phoneWhatsApp: '+1 305 555 0147',
      linkedinProfile: 'linkedin.com/in/ricardofernandez',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$780 Million',
      geographicsFootprint: 'Americas, Caribbean',
      procurementContacts: 'Central Procurement: sourcing@globaltechmro.com',
      sparePartsProcurement: 'Multi-vendor strategy, approved vendor list of 120+ suppliers',
      frequencyOfShipments: 'Daily shipments, multiple AOG responses per week',
      procurementRatioOfSpareParts: 'Components 50%, Hardware 30%, Chemicals 20%',
      technicalFeaturesOfSpareParts: 'Strict airworthiness compliance, dual release required',
      preferredPaymentTerms: 'Net 45, Volume discounts preferred',
      newAirlinesAcquisition: 'N/A - MRO Provider',
      partnershipWithDistributorOrSuppliers: 'Seeking exclusive distribution agreements in LatAm',
      othersIfAny: 'Interested in vendor managed inventory',
      customerBenchmarkingSummary: 'Top 10 MRO in Americas, high volume buyer',
      additionalCommercialNotes: 'Annual contracts reviewed in September'
    },
    {
      sNo: 3,
      customerType: 'Component Repair Shops',
      companyName: 'Precision Avionics Ltd',
      customerName: 'Precision Avionics Ltd',
      headquarter: 'Birmingham, UK',
      employeeSize: '480',
      revenueSize: '$62 Million',
      businessLocation: 'Birmingham, Manchester',
      websiteURL: 'www.precisionavionics.co.uk',
      keyContact: 'James Wilson',
      designation: 'Purchasing Manager',
      emailAddress: 'james.wilson@precisionavionics.co.uk',
      phoneWhatsApp: '+44 7700 123456',
      linkedinProfile: 'linkedin.com/in/jameswilson',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$62 Million',
      geographicsFootprint: 'UK, Ireland, Northern Europe',
      procurementContacts: 'Buying Team: purchasing@precisionavionics.co.uk',
      sparePartsProcurement: 'Specialized avionics components, 80% OEM sourced',
      frequencyOfShipments: 'Bi-weekly regular orders, express for urgent',
      procurementRatioOfSpareParts: 'Avionics LRUs 70%, Test Equipment 20%, Consumables 10%',
      technicalFeaturesOfSpareParts: 'EASA Part 145 compliant, full traceability required',
      preferredPaymentTerms: 'Net 30, Proforma for first orders',
      newAirlinesAcquisition: 'N/A - Component Shop',
      partnershipWithDistributorOrSuppliers: 'Looking for Honeywell/Collins authorized distributors',
      othersIfAny: 'Core exchange programs welcome',
      customerBenchmarkingSummary: 'Niche player with strong avionics expertise',
      additionalCommercialNotes: 'Quick decision maker, owner-operated business'
    },
    {
      sNo: 4,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'Pacific Rim Leasing',
      customerName: 'Pacific Rim Leasing',
      headquarter: 'Tokyo, Japan',
      employeeSize: '340',
      revenueSize: '$1.3 Billion',
      businessLocation: 'Tokyo, Seoul, Shanghai, Sydney',
      websiteURL: 'www.pacificrimleasing.jp',
      keyContact: 'Hiroshi Tanaka',
      designation: 'Asset Management Director',
      emailAddress: 'hiroshi.tanaka@pacificrimleasing.jp',
      phoneWhatsApp: '+81 90 1234 5678',
      linkedinProfile: 'linkedin.com/in/hiroshitanaka',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$1.3 Billion',
      geographicsFootprint: 'Asia Pacific, Oceania',
      procurementContacts: 'Technical Asset Team: assets@pacificrimleasing.jp',
      sparePartsProcurement: 'Coordinates with lessees, maintains strategic spares pool',
      frequencyOfShipments: 'Monthly replenishment, transition support as needed',
      procurementRatioOfSpareParts: 'Engine LLPs 60%, Airframe components 30%, APU 10%',
      technicalFeaturesOfSpareParts: 'Green time components, BER certified engines',
      preferredPaymentTerms: 'Net 90, Bank guarantee for large transactions',
      newAirlinesAcquisition: 'Acquiring 25 A321neo and 15 787-9 through 2027',
      partnershipWithDistributorOrSuppliers: 'Strategic partnerships with OEMs and tier-1 suppliers',
      othersIfAny: 'Interested in power-by-hour programs',
      customerBenchmarkingSummary: 'Premium lessor with strong Japanese backing',
      additionalCommercialNotes: 'Long procurement cycles, relationship-driven decisions'
    },
    {
      sNo: 5,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'EuroGround Services',
      customerName: 'EuroGround Services',
      headquarter: 'Amsterdam, Netherlands',
      employeeSize: '4,100',
      revenueSize: '$520 Million',
      businessLocation: 'Amsterdam, Brussels, Frankfurt, Paris',
      websiteURL: 'www.eurogroundservices.eu',
      keyContact: 'Sophie van der Berg',
      designation: 'Chief Procurement Officer',
      emailAddress: 'sophie.vanderberg@eurogroundservices.eu',
      phoneWhatsApp: '+31 6 1234 5678',
      linkedinProfile: 'linkedin.com/in/sophievanderberg',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$520 Million',
      geographicsFootprint: 'Western Europe, Scandinavia',
      procurementContacts: 'Procurement Dept: procurement@eurogroundservices.eu',
      sparePartsProcurement: 'Centralized purchasing for all stations',
      frequencyOfShipments: 'Daily deliveries to hub stations',
      procurementRatioOfSpareParts: 'GSE parts 40%, Tooling 35%, Consumables 25%',
      technicalFeaturesOfSpareParts: 'EU safety certified, environmentally compliant',
      preferredPaymentTerms: 'Net 45, Framework agreements preferred',
      newAirlinesAcquisition: 'N/A - Ground Handler',
      partnershipWithDistributorOrSuppliers: 'Open to GSE parts distribution partnerships',
      othersIfAny: 'Sustainability certifications valued',
      customerBenchmarkingSummary: 'Leading European ground handler, stable buyer',
      additionalCommercialNotes: 'Tender process for contracts >€50k'
    },
    {
      sNo: 6,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Sunrise Pacific Airlines',
      customerName: 'Sunrise Pacific Airlines',
      headquarter: 'Manila, Philippines',
      employeeSize: '4,600',
      revenueSize: '$890 Million',
      businessLocation: 'Manila, Cebu, Davao, Clark',
      websiteURL: 'www.sunrisepacific.ph',
      keyContact: 'Maria Santos',
      designation: 'Materials Manager',
      emailAddress: 'maria.santos@sunrisepacific.ph',
      phoneWhatsApp: '+63 917 123 4567',
      linkedinProfile: 'linkedin.com/in/mariasantos',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$890 Million',
      geographicsFootprint: 'Philippines, ASEAN, Northeast Asia',
      procurementContacts: 'Supply Chain: supplychain@sunrisepacific.ph',
      sparePartsProcurement: 'Regional distributors preferred, OEM for critical items',
      frequencyOfShipments: 'Weekly consolidated shipments',
      procurementRatioOfSpareParts: 'Rotables 40%, Consumables 40%, Tools 20%',
      technicalFeaturesOfSpareParts: 'CAAP approved, FAA/EASA equivalent accepted',
      preferredPaymentTerms: 'Net 30, T/T for urgent orders',
      newAirlinesAcquisition: 'Fleet expansion: 8 A321neo by 2025',
      partnershipWithDistributorOrSuppliers: 'Seeking local stock arrangements',
      othersIfAny: 'Price competitiveness is key factor',
      customerBenchmarkingSummary: 'Fast-growing LCC with aggressive expansion plans',
      additionalCommercialNotes: 'Quick procurement cycles, cost-focused'
    },
    {
      sNo: 7,
      customerType: 'MRO Service Providers',
      companyName: 'IndoAsia MRO Solutions',
      customerName: 'IndoAsia MRO Solutions',
      headquarter: 'Jakarta, Indonesia',
      employeeSize: '3,800',
      revenueSize: '$450 Million',
      businessLocation: 'Jakarta, Surabaya, Bali',
      websiteURL: 'www.indoasiamro.co.id',
      keyContact: 'Budi Santoso',
      designation: 'VP Supply Chain',
      emailAddress: 'budi.santoso@indoasiamro.co.id',
      phoneWhatsApp: '+62 812 345 6789',
      linkedinProfile: 'linkedin.com/in/budisantoso',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$450 Million',
      geographicsFootprint: 'Indonesia, Southeast Asia',
      procurementContacts: 'Purchasing: purchasing@indoasiamro.co.id',
      sparePartsProcurement: 'Mix of OEM, distributors, and approved brokers',
      frequencyOfShipments: 'Multiple weekly shipments, AOG support 24/7',
      procurementRatioOfSpareParts: 'Airframe 45%, Engine 35%, Landing Gear 20%',
      technicalFeaturesOfSpareParts: 'DGCA Indonesia approved, international certs accepted',
      preferredPaymentTerms: 'Net 60, Consignment for high-value items',
      newAirlinesAcquisition: 'N/A - MRO Provider',
      partnershipWithDistributorOrSuppliers: 'Looking for Boeing/Airbus parts distributors',
      othersIfAny: 'Training and technical support valued',
      customerBenchmarkingSummary: 'Dominant Indonesian MRO, government contracts',
      additionalCommercialNotes: 'Relationship building important, formal RFQ process'
    },
    {
      sNo: 8,
      customerType: 'Component Repair Shops',
      companyName: 'MedTech Aerospace',
      customerName: 'MedTech Aerospace',
      headquarter: 'Tel Aviv, Israel',
      employeeSize: '320',
      revenueSize: '$48 Million',
      businessLocation: 'Tel Aviv, Haifa',
      websiteURL: 'www.medtechaero.co.il',
      keyContact: 'David Cohen',
      designation: 'CEO',
      emailAddress: 'david.cohen@medtechaero.co.il',
      phoneWhatsApp: '+972 54 123 4567',
      linkedinProfile: 'linkedin.com/in/davidcohen',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$48 Million',
      geographicsFootprint: 'Israel, Middle East, Europe',
      procurementContacts: 'Direct with CEO or ops@medtechaero.co.il',
      sparePartsProcurement: 'Specialized in pneumatic and hydraulic components',
      frequencyOfShipments: 'As needed, typically bi-weekly',
      procurementRatioOfSpareParts: 'Hydraulic 50%, Pneumatic 35%, Seals/Gaskets 15%',
      technicalFeaturesOfSpareParts: 'MIL-SPEC compliant, aerospace grade materials',
      preferredPaymentTerms: 'Net 30, Cash discount available',
      newAirlinesAcquisition: 'N/A - Component Shop',
      partnershipWithDistributorOrSuppliers: 'Exclusive distribution opportunities welcome',
      othersIfAny: 'Strong R&D capabilities for custom solutions',
      customerBenchmarkingSummary: 'Innovative niche player with defense background',
      additionalCommercialNotes: 'Fast decision making, technically driven'
    },
    {
      sNo: 9,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'Silk Road Aviation Capital',
      customerName: 'Silk Road Aviation Capital',
      headquarter: 'Shanghai, China',
      employeeSize: '580',
      revenueSize: '$2.1 Billion',
      businessLocation: 'Shanghai, Beijing, Hong Kong, Singapore',
      websiteURL: 'www.silkroadaviation.cn',
      keyContact: 'Wei Zhang',
      designation: 'Head of Technical Services',
      emailAddress: 'wei.zhang@silkroadaviation.cn',
      phoneWhatsApp: '+86 138 1234 5678',
      linkedinProfile: 'linkedin.com/in/weizhang',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$2.1 Billion',
      geographicsFootprint: 'China, Belt & Road countries, Global',
      procurementContacts: 'Technical Procurement: techprocure@silkroadaviation.cn',
      sparePartsProcurement: 'Primarily OEM channels, approved Chinese suppliers',
      frequencyOfShipments: 'Monthly strategic, as-needed for transitions',
      procurementRatioOfSpareParts: 'Engines 50%, Airframe 30%, Interiors 20%',
      technicalFeaturesOfSpareParts: 'CAAC certification required, dual release preferred',
      preferredPaymentTerms: 'Net 120, Bank guarantees for major purchases',
      newAirlinesAcquisition: 'Ordering 50 C919, 30 ARJ21 for Chinese market',
      partnershipWithDistributorOrSuppliers: 'JV partnerships with Chinese manufacturers',
      othersIfAny: 'Local content requirements important',
      customerBenchmarkingSummary: 'State-backed lessor with rapid growth trajectory',
      additionalCommercialNotes: 'Complex approval process, patience required'
    },
    {
      sNo: 10,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'AfriGround Aviation',
      customerName: 'AfriGround Aviation',
      headquarter: 'Lagos, Nigeria',
      employeeSize: '1,800',
      revenueSize: '$180 Million',
      businessLocation: 'Lagos, Abuja, Accra, Nairobi',
      websiteURL: 'www.afrigroundaviation.com',
      keyContact: 'Chukwu Okafor',
      designation: 'Operations Director',
      emailAddress: 'chukwu.okafor@afrigroundaviation.com',
      phoneWhatsApp: '+234 803 123 4567',
      linkedinProfile: 'linkedin.com/in/chukwuokafor',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$180 Million',
      geographicsFootprint: 'West Africa, East Africa',
      procurementContacts: 'Procurement: procurement@afrigroundaviation.com',
      sparePartsProcurement: 'International suppliers, local where available',
      frequencyOfShipments: 'Bi-weekly, express for critical items',
      procurementRatioOfSpareParts: 'GSE 50%, Tools 30%, Safety Equipment 20%',
      technicalFeaturesOfSpareParts: 'International standards, adaptable to conditions',
      preferredPaymentTerms: 'LC at sight, Net 30 for established suppliers',
      newAirlinesAcquisition: 'N/A - Ground Handler',
      partnershipWithDistributorOrSuppliers: 'Seeking African distribution partners',
      othersIfAny: 'Logistics support to remote locations valued',
      customerBenchmarkingSummary: 'Growing African ground handler, challenging logistics',
      additionalCommercialNotes: 'Forex considerations, import procedures complex'
    },
    {
      sNo: 11,
      customerType: 'Airline Operators (Domestic Airlines and International Airlines)',
      companyName: 'Alpine Air Connect',
      customerName: 'Alpine Air Connect',
      headquarter: 'Zurich, Switzerland',
      employeeSize: '3,200',
      revenueSize: '$720 Million',
      businessLocation: 'Zurich, Geneva, Basel, Vienna',
      websiteURL: 'www.alpineairconnect.ch',
      keyContact: 'Thomas Berger',
      designation: 'Technical Procurement Lead',
      emailAddress: 'thomas.berger@alpineairconnect.ch',
      phoneWhatsApp: '+41 79 123 4567',
      linkedinProfile: 'linkedin.com/in/thomasberger',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$720 Million',
      geographicsFootprint: 'Central Europe, Alpine Region',
      procurementContacts: 'Technical Purchasing: tech.purchasing@alpineairconnect.ch',
      sparePartsProcurement: 'OEM focus with approved European distributors',
      frequencyOfShipments: 'Daily from European hubs',
      procurementRatioOfSpareParts: 'Rotables 50%, Consumables 30%, Expendables 20%',
      technicalFeaturesOfSpareParts: 'EASA only, premium quality standards',
      preferredPaymentTerms: 'Net 30, Swiss Franc preferred',
      newAirlinesAcquisition: 'Adding 6 E195-E2 for regional routes',
      partnershipWithDistributorOrSuppliers: 'Exclusive European supplier relationships',
      othersIfAny: 'Environmental sustainability certifications required',
      customerBenchmarkingSummary: 'Premium regional carrier, quality over cost',
      additionalCommercialNotes: 'Thorough vendor qualification process'
    },
    {
      sNo: 12,
      customerType: 'MRO Service Providers',
      companyName: 'GulfTech Aerospace',
      customerName: 'GulfTech Aerospace',
      headquarter: 'Sharjah, UAE',
      employeeSize: '2,600',
      revenueSize: '$380 Million',
      businessLocation: 'Sharjah, Ras Al Khaimah, Muscat',
      websiteURL: 'www.gulftechaero.ae',
      keyContact: 'Ali Hassan',
      designation: 'Procurement Director',
      emailAddress: 'ali.hassan@gulftechaero.ae',
      phoneWhatsApp: '+971 50 234 5678',
      linkedinProfile: 'linkedin.com/in/alihassan',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$380 Million',
      geographicsFootprint: 'GCC, Middle East, South Asia',
      procurementContacts: 'Central Buying: buying@gulftechaero.ae',
      sparePartsProcurement: 'Multi-source strategy, competitive bidding',
      frequencyOfShipments: 'Daily, same-day AOG capability',
      procurementRatioOfSpareParts: 'Airframe 40%, Interiors 35%, Composites 25%',
      technicalFeaturesOfSpareParts: 'FAA/EASA/GCAA certified, full documentation',
      preferredPaymentTerms: 'Net 45, Volume rebates negotiated',
      newAirlinesAcquisition: 'N/A - MRO Provider',
      partnershipWithDistributorOrSuppliers: 'Regional stocking partner opportunities',
      othersIfAny: 'Free zone advantages for customs',
      customerBenchmarkingSummary: 'Competitive Gulf MRO, price-sensitive market',
      additionalCommercialNotes: 'Arabic language support appreciated'
    },
    {
      sNo: 13,
      customerType: 'Component Repair Shops',
      companyName: 'TechnoWing Repairs',
      customerName: 'TechnoWing Repairs',
      headquarter: 'Warsaw, Poland',
      employeeSize: '410',
      revenueSize: '$55 Million',
      businessLocation: 'Warsaw, Krakow',
      websiteURL: 'www.technowingrepairs.pl',
      keyContact: 'Piotr Kowalski',
      designation: 'Commercial Director',
      emailAddress: 'piotr.kowalski@technowingrepairs.pl',
      phoneWhatsApp: '+48 601 234 567',
      linkedinProfile: 'linkedin.com/in/piotrkowalski',
      companySize: 'Small Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$55 Million',
      geographicsFootprint: 'Central/Eastern Europe, CIS',
      procurementContacts: 'Purchasing: purchasing@technowingrepairs.pl',
      sparePartsProcurement: 'Focus on landing gear and wheel/brake components',
      frequencyOfShipments: 'Weekly scheduled, express available',
      procurementRatioOfSpareParts: 'Landing Gear 60%, Wheels/Brakes 30%, Hardware 10%',
      technicalFeaturesOfSpareParts: 'EASA Part 145, PMA alternatives considered',
      preferredPaymentTerms: 'Net 45, EUR preferred',
      newAirlinesAcquisition: 'N/A - Component Shop',
      partnershipWithDistributorOrSuppliers: 'Looking for Safran, Collins partnerships',
      othersIfAny: 'Competitive labor costs advantage',
      customerBenchmarkingSummary: 'Cost-effective Eastern European repair shop',
      additionalCommercialNotes: 'EU grants potential for expansion'
    },
    {
      sNo: 14,
      customerType: 'Aircraft Leasing Companies',
      companyName: 'Maple Leaf Aviation Finance',
      customerName: 'Maple Leaf Aviation Finance',
      headquarter: 'Toronto, Canada',
      employeeSize: '280',
      revenueSize: '$980 Million',
      businessLocation: 'Toronto, Montreal, Vancouver',
      websiteURL: 'www.mapleleafaviation.ca',
      keyContact: 'Catherine Roy',
      designation: 'VP Technical Operations',
      emailAddress: 'catherine.roy@mapleleafaviation.ca',
      phoneWhatsApp: '+1 416 555 0189',
      linkedinProfile: 'linkedin.com/in/catherineroy',
      companySize: 'Mid-size Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$980 Million',
      geographicsFootprint: 'Canada, USA, Caribbean',
      procurementContacts: 'Technical Team: technical@mapleleafaviation.ca',
      sparePartsProcurement: 'OEM preferred, approved North American suppliers',
      frequencyOfShipments: 'As needed for lease transitions',
      procurementRatioOfSpareParts: 'Engines 55%, Airframe 30%, Interiors 15%',
      technicalFeaturesOfSpareParts: 'TC Canada/FAA certified, full back-to-birth',
      preferredPaymentTerms: 'Net 60, CAD or USD accepted',
      newAirlinesAcquisition: 'Adding 15 De Havilland Dash 8-400 for regional',
      partnershipWithDistributorOrSuppliers: 'Strategic OEM relationships',
      othersIfAny: 'Focus on regional aircraft portfolio',
      customerBenchmarkingSummary: 'Regional aircraft specialist, stable portfolio',
      additionalCommercialNotes: 'Conservative approach, thorough due diligence'
    },
    {
      sNo: 15,
      customerType: 'Line Maintenance & Ground Handling Companies',
      companyName: 'SkyServe India',
      customerName: 'SkyServe India',
      headquarter: 'Bangalore, India',
      employeeSize: '6,500',
      revenueSize: '$420 Million',
      businessLocation: 'Bangalore, Delhi, Mumbai, Hyderabad, Chennai',
      websiteURL: 'www.skyserveindia.in',
      keyContact: 'Arun Krishnamurthy',
      designation: 'Head of Procurement',
      emailAddress: 'arun.krishnamurthy@skyserveindia.in',
      phoneWhatsApp: '+91 98450 12345',
      linkedinProfile: 'linkedin.com/in/arunkrishnamurthy',
      companySize: 'Large Enterprise',
      industryArea: 'Aviation',
      annualRevenue: '$420 Million',
      geographicsFootprint: 'Pan-India, Nepal, Sri Lanka, Bangladesh',
      procurementContacts: 'Procurement Cell: procurement@skyserveindia.in',
      sparePartsProcurement: 'Centralized procurement, regional warehouses',
      frequencyOfShipments: 'Daily to major hubs, weekly to smaller stations',
      procurementRatioOfSpareParts: 'GSE 45%, Tools 30%, Safety/Consumables 25%',
      technicalFeaturesOfSpareParts: 'DGCA approved, BIS standards where applicable',
      preferredPaymentTerms: 'Net 30, INR preferred for domestic',
      newAirlinesAcquisition: 'N/A - Ground Handler',
      partnershipWithDistributorOrSuppliers: 'Looking for GSE OEM partnerships in India',
      othersIfAny: 'Make in India initiative participation welcome',
      customerBenchmarkingSummary: 'Largest Indian ground handler, rapid growth',
      additionalCommercialNotes: 'Government tender processes for major contracts'
    }
  ]

  const getCurrentData = () => {
    if (activeProposition === 'proposition2') {
      return proposition2Data
    }
    if (activeProposition === 'proposition3') {
      return proposition3Data
    }
    return proposition1Data
  }

  const exportToCSV = () => {
    const data = getCurrentData()
    const headers = ['S.No.', 'Company Name', 'Year Established', 'Headquarters', 'Cities / Regions Covered', 
                     'Ownership Type (Local / Regional / Global)', 'No. of Employees (est.liff available)', 
                     'Revenue/Turnover(if available) 2024', 'Key Contact Person', 'Designation / Role', 
                     'Email', 'Address (verified / generic)', 'Phone / WhatsApp Number', 'LinkedIn Profile', 'Website URL']
    
    const csvContent = [
      headers.join(','),
      ...data.map(row =>
        [row.sNo, row.companyName, row.yearEstablished, row.headquarters, row.citiesRegionsCovered,
         row.ownershipType, row.noOfEmployees, row.revenueTurnover, row.keyContact, row.designation,
         row.emailAddress, row.geographicsFootprint, row.phoneWhatsApp, row.linkedinProfile, row.websiteURL]
          .map(val => `"${String(val || 'NN').replace(/"/g, '""')}"`)
          .join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `airline_industry_${activeProposition}.csv`
    link.click()
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex justify-end items-start mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={exportToCSV}
          className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          <Download size={20} />
          Export CSV
        </motion.button>
      </div>

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
          Global, Asia Pacific and India Commercial Airlines Spare Parts Market
        </h1>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Customer Intelligence Database for Aviation Industry
        </p>
      </motion.div>

      {/* Proposition Tabs */}
      <div className={`p-6 rounded-2xl mb-8 shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveProposition('proposition1')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition1'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 1 - Basic
          </button>
          <button
            onClick={() => setActiveProposition('proposition2')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition2'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 2 - Advanced
          </button>
          <button
            onClick={() => setActiveProposition('proposition3')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition3'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 3 - Premium
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Chart 1: Customer Type Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}
        >
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Customer Type Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const data = getCurrentData()
              const typeCounts: { [key: string]: number } = {}
              data.forEach(d => {
                const type = d.customerType || 'Unknown'
                // Shorten the customer type names for display
                let shortType = type
                if (type.includes('Airline Operators')) shortType = 'Airlines'
                else if (type.includes('MRO Service')) shortType = 'MRO'
                else if (type.includes('Component Repair')) shortType = 'Component Shops'
                else if (type.includes('Aircraft Leasing')) shortType = 'Leasing'
                else if (type.includes('Line Maintenance')) shortType = 'Ground Handling'
                typeCounts[shortType] = (typeCounts[shortType] || 0) + 1
              })
              return Object.entries(typeCounts).map(([type, count]) => ({
                type,
                count
              }))
            })()}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="type" stroke={isDark ? '#9ca3af' : '#6b7280'} angle={-20} textAnchor="end" height={80} fontSize={10} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#e5e7eb' : '#1f2937'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Bar dataKey="count" fill="#8B5CF6" name="Number of Customers" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Chart 2: Revenue Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}
        >
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Revenue Comparison (Top Companies)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={(() => {
              const data = getCurrentData()
              return data.slice(0, 10).map(d => {
                // Extract revenue value from string like "$2.8 Billion" or "$450 Million"
                const revenueStr = d.revenueSize || d.annualRevenue || '0'
                let revenue = 0
                const billionMatch = revenueStr.match(/([\d.]+)\s*Billion/i)
                const millionMatch = revenueStr.match(/([\d.]+)\s*Million/i)
                if (billionMatch) {
                  revenue = parseFloat(billionMatch[1]) * 1000 // Convert to millions
                } else if (millionMatch) {
                  revenue = parseFloat(millionMatch[1])
                }
                // Shorten company name for display
                const companyName = d.companyName || 'Unknown'
                const shortName = companyName.length > 12 ? companyName.substring(0, 12) + '...' : companyName
                return {
                  company: shortName,
                  revenue: revenue
                }
              }).filter(d => d.revenue > 0)
            })()}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="company" stroke={isDark ? '#9ca3af' : '#6b7280'} angle={-35} textAnchor="end" height={80} fontSize={9} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#e5e7eb' : '#1f2937'
                }}
                formatter={(value: number) => [`$${value}M`, 'Revenue']}
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Line type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} name="Revenue (USD M)" dot={{ fill: '#F59E0B', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Distributors Table */}
      <div className={`p-8 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        {/* Top Scrollbar */}
        <div 
          ref={topScrollRef}
          className="overflow-x-auto mb-2"
          onScroll={(e) => {
            if (tableScrollRef.current) {
              tableScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
            }
          }}
        >
          <div style={{ height: '1px' }}></div>
        </div>
        
        <div 
          ref={tableScrollRef}
          className="overflow-x-auto"
          onScroll={(e) => {
            if (topScrollRef.current) {
              topScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
            }
          }}
        >
          <table className="w-full border-collapse text-sm min-w-max">
            <thead>
              <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                <th className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-gray-300 text-gray-900' : 'bg-gray-200 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                  Sr.No.
                </th>
                {activeProposition === 'proposition1' && (
                  <>
                    <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Company Details
                    </th>
                    <th colSpan={5} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'}`}>
                      Contact Details
                    </th>
                  </>
                )}
                {activeProposition === 'proposition2' && (
                  <>
                    <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Company Details
                    </th>
                    <th colSpan={5} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Contact Details
                    </th>
                    <th colSpan={5} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-blue-200 text-gray-900' : 'bg-blue-100 text-gray-900'}`}>
                      Fleet Information
                    </th>
                  </>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Company Details
                    </th>
                    <th colSpan={5} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Contact Details
                    </th>
                    <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Procurement & Purchasing Details
                    </th>
                    <th colSpan={4} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Growth & Expansion Plans (If any)
                    </th>
                    <th colSpan={2} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-green-200 text-gray-900' : 'bg-green-100 text-gray-900'}`}>
                      CMI Insights
                    </th>
                  </>
                )}
              </tr>
              <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                {activeProposition === 'proposition1' && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                      Sr.No.
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Customer Type (Select Customer Type)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Customer Name
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Headquarter
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Employee Size
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Revenue Size
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Business Location
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Website
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Key Contact Person
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Designation/Function
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Email Address
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Phone/WhatsApp Number
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'}`}>
                      LinkedIn Profile
                    </th>
                  </>
                )}
                {activeProposition === 'proposition2' && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                      Sr.No.
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Customer Type (Select Customer Type)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Customer Name
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Headquarter
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Employee Size
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Revenue Size
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Business Location
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Website
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Key Contact Person
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Designation/Function
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Email Address
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Phone/WhatsApp Number
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      LinkedIn Profile
                    </th>
                  </>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                      Sr.No.
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Customer Type (Select Customer Type)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Customer Name
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Headquarter
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Employee Size
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Revenue Size
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Business Location
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Website
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Key Contact Person
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Designation/Function
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Email Address
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Phone/WhatsApp Number
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      LinkedIn Profile
                    </th>
                  </>
                )}
                {activeProposition === 'proposition2' && (
                  <>
                    {/* Fleet Information - 5 columns */}
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Aircraft Types and Brand
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Fleet Handling Capacity
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Aircraft Age and Engine Type
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Fleet Utilization or Average Daily Work of Airlines
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Maintenance Model - In-house Maintenance Vs Outsource
                    </th>
                  </>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    {/* Procurement & Purchasing Details - 6 columns */}
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Procurement Contacts (Name, Email, Phone)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Spare Parts Procurement (Volume - Yearly)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Frequency of Shipments Required (Monthly, Quarterly or Yearly)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Procurement Ratio of Spare Parts by Type and Required Product Category
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Technical Features of Spare Parts
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Preferred Payment Terms
                    </th>
                    {/* Growth & Expansion Plans - 4 columns */}
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      New Airlines Acquisition for Spare Parts Service
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Partnership with Distributor or Suppliers
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Others (If Any)
                    </th>
                    {/* CMI Insights - 2 columns */}
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-green-100 text-gray-900' : 'bg-green-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '140px', maxWidth: '140px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Customer Benchmarking Summary (Potential Customers/Bank)
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-green-100 text-gray-900' : 'bg-green-50 text-gray-900'}`} style={{ width: '140px', maxWidth: '140px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                      Additional Comments/Notes by CMI Team
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {getCurrentData().map((row, index) => (
                <tr
                  key={index}
                  className={`border-b ${isDark ? 'border-navy-light hover:bg-navy-dark' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
                >
                  {activeProposition === 'proposition1' && (
                    <>
                      <td className={`px-3 py-3 text-center font-semibold text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                        {row.sNo}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.customerType || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.companyName || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.headquarter || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.employeeSize || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.revenueSize || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.businessLocation || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.websiteURL !== 'NN' && row.websiteURL !== 'NA' ? (
                          <a href={`https://${row.websiteURL}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                            {row.websiteURL}
                          </a>
                        ) : row.websiteURL}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.keyContact || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.designation || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.emailAddress !== 'NN' && row.emailAddress !== 'NA' ? (
                          <a href={`mailto:${row.emailAddress}`} className="text-electric-blue hover:underline">
                            {row.emailAddress}
                          </a>
                        ) : row.emailAddress}
                      </td>
                      <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.phoneWhatsApp || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark`}>
                        {row.linkedinProfile !== 'NN' && row.linkedinProfile !== 'NA' ? (
                          <a href={`https://${row.linkedinProfile}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                            {row.linkedinProfile}
                          </a>
                        ) : row.linkedinProfile}
                      </td>
                    </>
                  )}
                  {activeProposition === 'proposition2' && (
                    <>
                      <td className={`px-3 py-3 text-center font-semibold text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                        {row.sNo}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.customerType || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.companyName || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.headquarter || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.employeeSize || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.revenueSize || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.businessLocation || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.websiteURL !== 'NN' && row.websiteURL !== 'NA' ? (
                          <a href={`https://${row.websiteURL}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                            {row.websiteURL}
                          </a>
                        ) : row.websiteURL}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.keyContact || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.designation || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.emailAddress !== 'NN' && row.emailAddress !== 'NA' ? (
                          <a href={`mailto:${row.emailAddress}`} className="text-electric-blue hover:underline">
                            {row.emailAddress}
                          </a>
                        ) : row.emailAddress}
                      </td>
                      <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.phoneWhatsApp || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.linkedinProfile !== 'NN' && row.linkedinProfile !== 'NA' ? (
                          <a href={`https://${row.linkedinProfile}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                            {row.linkedinProfile}
                          </a>
                        ) : row.linkedinProfile}
                      </td>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      <td className={`px-3 py-3 text-center font-semibold text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                        {row.sNo}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.customerType || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.companyName || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.headquarter || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.employeeSize || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.revenueSize || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.businessLocation || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.websiteURL !== 'NN' && row.websiteURL !== 'NA' ? (
                          <a href={`https://${row.websiteURL}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                            {row.websiteURL}
                          </a>
                        ) : row.websiteURL}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.keyContact || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.designation || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.emailAddress !== 'NN' && row.emailAddress !== 'NA' ? (
                          <a href={`mailto:${row.emailAddress}`} className="text-electric-blue hover:underline">
                            {row.emailAddress}
                          </a>
                        ) : row.emailAddress}
                      </td>
                      <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.phoneWhatsApp || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.linkedinProfile !== 'NN' && row.linkedinProfile !== 'NA' ? (
                          <a href={`https://${row.linkedinProfile}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                            {row.linkedinProfile}
                          </a>
                        ) : row.linkedinProfile}
                      </td>
                    </>
                  )}
                  {activeProposition === 'proposition2' && (
                    <>
                      {/* Fleet Information - 5 columns */}
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.aircraftTypesAndBrand || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.fleetHandlingCapacity || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.aircraftAgeAndEngineType || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.fleetUtilization || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark`}>
                        {row.maintenanceModel || 'NN'}
                      </td>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      {/* Procurement & Purchasing Details - 6 columns */}
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.procurementContacts || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.sparePartsProcurement || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.frequencyOfShipments || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.procurementRatioOfSpareParts || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.technicalFeaturesOfSpareParts || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredPaymentTerms || 'NN'}
                      </td>
                      {/* Growth & Expansion Plans - 4 columns */}
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.newAirlinesAcquisition || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.partnershipWithDistributorOrSuppliers || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.othersIfAny || 'NN'}
                      </td>
                      {/* CMI Insights - 2 columns */}
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.customerBenchmarkingSummary || 'NN'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark`}>
                        {row.additionalCommercialNotes || 'NN'}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

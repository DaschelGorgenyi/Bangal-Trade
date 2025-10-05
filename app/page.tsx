"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Ship,
  Globe,
  Shield,
  Users,
  CheckCircle,
  Star,
  Menu,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Truck,
  FileCheck,
  Package,
  X,
  Calendar,
  LocateIcon as Location,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ImportExportWebsite() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const openCaseStudy = (caseStudy) => {
    setSelectedCaseStudy(caseStudy)
  }

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null)
  }

  const caseStudies = [
    {
      id: 1,
      title: "Corporate Uniforms for Tech Giant",
      client: "Global Tech Corp",
      product: "Custom branded polo shirts and blazers",
      quantity: "50,000 pieces",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Delivered high-quality corporate uniforms with custom embroidery for a Fortune 500 tech company across 15 countries.",
      fullDescription:
        "Global Tech Corp approached us with an urgent need to refresh their corporate identity through new employee uniforms. The challenge was to create a cohesive brand experience across 15 countries while maintaining quality standards and meeting tight deadlines.",
      timeline: "8 weeks",
      location: "USA, Europe, Asia",
      value: "$2.5M",
      challenges: [
        "Coordinating production across multiple time zones",
        "Ensuring consistent quality across large quantities",
        "Meeting strict brand guidelines and color matching",
        "Logistics coordination for 15 different countries",
      ],
      solutions: [
        "Implemented 24/7 production monitoring system",
        "Established quality control checkpoints at every stage",
        "Used advanced color matching technology",
        "Created dedicated logistics team for each region",
      ],
      results: [
        "100% on-time delivery across all locations",
        "99.8% quality approval rate",
        "15% cost savings compared to previous supplier",
        "Client renewed contract for additional 3 years",
      ],
      testimonial:
        "Bangladesh Direct exceeded our expectations in every way. Their attention to detail and ability to coordinate such a complex global project was impressive.",
      testimonialAuthor: "Sarah Johnson, Global Procurement Director",
    },
    {
      id: 2,
      title: "Hospital PPE Emergency Supply",
      client: "European Healthcare Network",
      product: "Medical scrubs and face masks",
      quantity: "100,000 pieces",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Rapid deployment of medical-grade textiles during COVID-19 pandemic with expedited shipping and quality certification.",
      fullDescription:
        "During the height of the COVID-19 pandemic, European Healthcare Network faced critical shortages of medical-grade textiles. They needed a reliable partner who could deliver high-quality PPE quickly while meeting strict medical standards.",
      timeline: "3 weeks",
      location: "Germany, France, Italy",
      value: "$1.8M",
      challenges: [
        "Extremely tight timeline due to emergency situation",
        "Meeting medical-grade quality standards",
        "Navigating international shipping restrictions",
        "Ensuring continuous supply chain during lockdowns",
      ],
      solutions: [
        "Activated emergency production protocols",
        "Fast-tracked quality certifications with medical authorities",
        "Utilized air freight and diplomatic channels",
        "Established backup suppliers and production facilities",
      ],
      results: [
        "Delivered 2 weeks ahead of schedule",
        "100% compliance with EU medical standards",
        "Helped save countless lives during critical period",
        "Established long-term partnership for ongoing PPE supply",
      ],
      testimonial:
        "In our darkest hour, Bangladesh Direct was our lifeline. Their rapid response and quality products helped us serve our patients when they needed us most.",
      testimonialAuthor: "Dr. Marco Rossi, Chief Medical Officer",
    },
    {
      id: 3,
      title: "Hotel Chain Uniform Refresh",
      client: "International Hotel Group",
      product: "Staff uniforms and linens",
      quantity: "25,000 pieces",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Complete uniform makeover for 200+ hotel properties with sustainable fabric choices and modern designs.",
      fullDescription:
        "International Hotel Group wanted to modernize their brand image with a complete uniform refresh across their global portfolio. The project required sustainable materials, modern designs, and seamless rollout across 200+ properties.",
      timeline: "12 weeks",
      location: "Global - 45 countries",
      value: "$3.2M",
      challenges: [
        "Designing uniforms for diverse climates and cultures",
        "Sourcing sustainable materials at scale",
        "Coordinating rollout across 200+ properties",
        "Training staff on new uniform care procedures",
      ],
      solutions: [
        "Created climate-specific fabric variations",
        "Partnered with certified sustainable textile suppliers",
        "Developed phased rollout strategy by region",
        "Provided comprehensive care instruction materials",
      ],
      results: [
        "95% staff satisfaction with new uniforms",
        "30% reduction in uniform replacement costs",
        "Achieved sustainability certification goals",
        "Enhanced brand consistency across all properties",
      ],
      testimonial:
        "The new uniforms have transformed our staff's confidence and our guests' perception. The sustainable approach aligns perfectly with our corporate values.",
      testimonialAuthor: "Jennifer Chen, Global Brand Director",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
              <Ship className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Bengal Trade </span>
              <p className="text-xs text-emerald-600 font-medium">Textile Specialists</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="#industries" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Industries
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700">Request Quote</Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-blue-900/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Chittagong Port with cargo containers"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 container px-4 md:px-6">
          <div className="max-w-4xl text-white">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400">🇧🇩 Trusted Since 1995</Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Bangladesh's Direct Connection to Global Textile Markets
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Connecting Bangladesh's finest textile manufacturers with the world through seamless import-export
              solutions. Your trusted partner for textile trade success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="px-8 bg-emerald-600 hover:bg-emerald-700 text-lg">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 text-white border-white hover:bg-white hover:text-gray-900 text-lg bg-transparent"
              >
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400">25+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-sm text-gray-200">Countries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400">1000+</div>
                <div className="text-sm text-gray-200">Successful Shipments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">About Bangladesh Direct</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Simplifying Cross-Border Trade Since 1995
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in Chittagong, Bangladesh Direct has grown from a small local textile trading company to
                Bangladesh's most trusted textile import-export specialist. We bridge the gap between Bangladeshi
                businesses and global markets, ensuring smooth, compliant, and cost-effective international trade
                operations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence, transparency, and customer success has made us the preferred choice for
                businesses across North America, Europe, and Asia seeking reliable trade partnerships with Bangladesh.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Global Reach</h3>
                  <p className="text-sm text-gray-600">Worldwide network</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Compliance</h3>
                  <p className="text-sm text-gray-600">100% regulatory adherence</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern office building in Dhaka"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ISO 9001:2015</div>
                    <div className="text-sm text-gray-600">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive Trade Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From documentation to delivery, we handle every aspect of your international trade operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Package className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Import Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Complete textile import solutions from sourcing to customs clearance and delivery
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Ship className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Export Solutions</CardTitle>
                <CardDescription className="text-gray-600">
                  Streamlined textile export processes to help you reach global fashion markets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Truck className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Freight & Logistics</CardTitle>
                <CardDescription className="text-gray-600">
                  Specialized textile shipping solutions with temperature and humidity control
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <FileCheck className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Customs Clearance</CardTitle>
                <CardDescription className="text-gray-600">
                  Expert handling of textile-specific customs procedures and trade regulations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Textile Categories We Specialize In</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Specialized Expertise Across Key Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep industry knowledge to handle your specific trade requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Corporate & Workwear", icon: "👔" },
              { name: "Hospitality & Service Industry", icon: "🏨" },
              { name: "Medical & Healthcare", icon: "🏥" },
              { name: "Sports & Activewear", icon: "⚽" },
              { name: "Promotional & Event Apparel", icon: "🎉" },
              { name: "School & Educational Institutions", icon: "🎓" },
              { name: "Military, Police, and Government", icon: "🛡️" },
              { name: "Industrial & Safety Gear", icon: "🦺" },
            ].map((industry, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center p-4">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-sm text-gray-900">{industry.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Trusted Trade Partner</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with Bangladesh's most reliable import-export company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Experienced Professionals</h3>
              <p className="text-gray-600">25+ years of combined expertise in international trade and logistics</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Network</h3>
              <p className="text-gray-600">Established partnerships with agents and suppliers in 50+ countries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees, clear cost breakdowns, and competitive rates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-600">100% compliance with international trade regulations and standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Global Partners</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Bangladesh Direct has been our reliable partner for textile imports from Bangladesh for over 5 years.
                  Their deep knowledge of fabric quality and textile regulations is exceptional.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-emerald-600">JM</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">James Mitchell</p>
                    <p className="text-sm text-gray-600">CEO, Fashion Forward Inc. (USA)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Excellent service for our cotton fabric exports to Europe. Bangladesh Direct handles all textile
                  logistics seamlessly, ensuring our fabrics arrive in perfect condition.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-emerald-600">AS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Anna Schmidt</p>
                    <p className="text-sm text-gray-600">Import Manager, EcoProducts GmbH (Germany)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  Their expertise in textile customs clearance and quality documentation has streamlined our supply
                  chain. The best textile trade partner we've worked with.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-emerald-600">KT</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Kenji Tanaka</p>
                    <p className="text-sm text-gray-600">Trade Director, Pacific Trading Co. (Japan)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Case Studies */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-8 text-gray-900">Success Stories & Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy) => (
                <Card
                  key={caseStudy.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => openCaseStudy(caseStudy)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-emerald-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-emerald-600 hover:bg-gray-100">View Case Study</Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-emerald-100 text-emerald-800">{caseStudy.client}</Badge>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">{caseStudy.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{caseStudy.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-emerald-600">{caseStudy.product}</span>
                      <span className="text-gray-500">{caseStudy.quantity}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                className="bg-transparent border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Start Trading?</h2>
              <p className="text-xl text-gray-600">Contact us today for a free consultation and quote</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <Input placeholder="Your full name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input placeholder="+1 (555) 123-4567" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input placeholder="Your company name" className="border-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us about your textile import/export requirements..."
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">Send Message</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Head Office</h4>
                        <p className="text-gray-600">
                          House 45, Road 12, Block C<br />
                          Banani, Dhaka 1213, Bangladesh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">
                          +880 2 9876543
                          <br />
                          +880 1712 345678
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">
                          info@bengaltrade.com
                          <br />
                          sales@bengaltrade.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Sunday - Thursday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <Ship className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Bangladesh Direct</span>
                  <p className="text-xs text-emerald-400 font-medium">Textile Specialists</p>
                </div>
              </div>
              <p className="text-gray-400">Bangladesh's trusted partner for global trade solutions since 1995.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Textile Import Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Textile Export Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Specialized Textile Logistics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Textile Customs & Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Garments & Textiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Jute Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Seafood
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Ceramics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>House 45, Road 12, Block C</li>
                <li>Banani, Dhaka 1213</li>
                <li>Bangladesh</li>
                <li className="pt-2">
                  <Link href="tel:+8802987654" className="hover:text-white">
                    +880 2 9876543
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@bengaltrade.com" className="hover:text-white">
                    info@bengaltrade.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Bangladesh Direct. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedCaseStudy.title}</h2>
                <Badge className="mt-2 bg-emerald-100 text-emerald-800">{selectedCaseStudy.client}</Badge>
              </div>
              <Button variant="ghost" size="sm" onClick={closeCaseStudy}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <Image
                    src={selectedCaseStudy.image || "/placeholder.svg"}
                    alt={selectedCaseStudy.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium text-gray-700">Timeline</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{selectedCaseStudy.timeline}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Location className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium text-gray-700">Location</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{selectedCaseStudy.location}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium text-gray-700">Quantity</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{selectedCaseStudy.quantity}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm font-medium text-gray-700">Project Value</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{selectedCaseStudy.value}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed">{selectedCaseStudy.fullDescription}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Challenges</h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Solutions</h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Results</h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Client Testimonial</h4>
                <blockquote className="text-gray-600 italic mb-3">"{selectedCaseStudy.testimonial}"</blockquote>
                <p className="text-sm font-medium text-emerald-600">— {selectedCaseStudy.testimonialAuthor}</p>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-emerald-600 hover:bg-emerald-700 mr-4">Request Similar Quote</Button>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent"
                >
                  Download Case Study PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

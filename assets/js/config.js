/**
 * Shay Charis Travel Solutions - Configuration & Data Registry
 * Centralizes brand data, contact points, and services for easy scalability.
 */

window.ShayCharisConfig = {
  brand: {
    name: 'Shay Charis Travel Solutions',
    tagline: 'Your Journey. Our Commitment.',
    location: 'Nairobi CBD, Rasumal House, 3rd floor, shop number 5',
    city: 'Nairobi, Kenya',
    airportCode: 'NBO',
    accentColor: '#F4A62A'
  },

  contacts: {
    primaryPhone: '+254707144839',
    primaryPhoneDisplay: '+254-707144839',
    secondaryPhone: '+254713844527',
    secondaryPhoneDisplay: '+254-713844527',
    email: 'sheilawahongo91@gmail.com',
    socialHandle: 'shay charis travel solutions'
  },

  services: [
    {
      code: 'HOL',
      title: 'Holiday and vacation planning',
      description: 'Holiday ideas, destinations and itineraries suited to your preferences and your budget.'
    },
    {
      code: 'TRV',
      title: 'Domestic and international travel planning',
      description: 'Destination research, proposed itineraries and help with travel preparation.'
    },
    {
      code: 'STY',
      title: 'Accommodation enquiries',
      description: 'Compare suitable hotels, resorts, lodges and other places to stay.'
    },
    {
      code: 'TRF',
      title: 'Airport transfers and transportation',
      description: 'Explore transport options through suitable providers, subject to applicable requirements.'
    },
    {
      code: 'COR',
      title: 'Corporate travel planning',
      description: 'Proposed itineraries and travel coordination for businesses and organizations.'
    },
    {
      code: 'GRP',
      title: 'Group and family travel',
      description: 'Group trips for families, social groups, churches and other organizations.'
    },
    {
      code: 'HNY',
      title: 'Honeymoon and romantic getaways',
      description: 'Personalized trip ideas for honeymoons, anniversaries and special occasions.'
    },
    {
      code: 'PKG',
      title: 'Customized travel packages',
      description: 'Tailored proposals built around your destination, activities, trip length and budget.'
    },
    {
      code: 'CNS',
      title: 'Travel consultation and itinerary planning',
      description: 'Planning guidance that helps you organize your trip with more confidence.'
    }
  ],

  getWhatsAppUrl(customMessage) {
    const defaultMsg = "Hello Shay Charis Travel Solutions, I'd like help planning a trip.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${this.contacts.primaryPhone}?text=${text}`;
  }
};

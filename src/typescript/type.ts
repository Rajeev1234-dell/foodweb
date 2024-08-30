//Global Type--
interface button {
  label: string;
  link: string;
}

interface buttontype extends button {
  styles: string;
}

//Type for HeroSection----

export interface herotype {
  cart_icon: string;
  menu_icon: string;
  logo: string;
  background_image: string;
  links: button[];
  nav_btn: buttontype;
  head_line: string;
  sub_headline: string;
  desc: string;
  hero_btn: buttontype;
}

//Type for FooterSection---
interface LinkSection {
  title: string;
  links: button[];
}

export interface footertype {
  logo: string;
  desc: string;
  links: LinkSection[];
  subscribe: string;
  placeholder: string;
  btn: button;
  copyright: string;
  settings: button[];
  icons: string[];
}

//Type for OfferSection--
export interface offertype {
  headline: string;
  sub_headline: string;
  view_btn: button;
  follow_btn: button;
}

//Type for fearuedSection--
interface imagetype {
  url: string;
  label: string;
}

export interface fearuredtype {
  title: string;
  image: imagetype[];
}

//Type for Testimonial--
export interface testimonialtype {
  title: string;
  profile: {
    name: string;
    image: string;
  };
  link: {
    label: string;
    url: string;
  };
  rating: string[];
  desc: string;
}

//Type for AboutSection or ProductSection--
export interface abouttype {
  varation: string;
  image: string;
  headline: string;
  sub_headline: string;
  desc: string;
  items?: string[];
  explore_btn: buttontype;
  order_btn: buttontype;
  bgcolor?: string;
}

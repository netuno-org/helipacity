import React, { useEffect } from 'react';

import sal from 'sal.js';

import Cluar from '../common/Cluar';

import Banner from '../components/Banner';
import Content from '../components/Content';
import Listing from '../components/Listing';
import ContactForm from '../components/functionality/ContactForm';
import ContactMap from '../components/functionality/ContactMap';
import CardList from '../components/functionality/CardList';
import QuickLinks from '../components/functionality/QuickLinks';

function Builder({ page }) {
  useEffect(() => {
    sal();
    document.getElementsByTagName('meta')["keywords"].content = page.keywords;
    document.getElementsByTagName('meta')["description"].content = page.description;
    document.title = page.title + ' | ' + Cluar.config().name;
  }, [page]);

  const components = [];
  for (const item of page.structure) {
    const { uid } = item;
    if (item.section === 'banner') {
      components.push(<Banner key={uid} {...item} />);
    } else if (item.section === 'content') {
      components.push(<Content key={uid} {...item} />);
    } else if (item.section === 'listing') {
      components.push(<Listing key={uid} {...item} />);
    } else if (item.section === 'functionality') {
      if (item.type === 'contact-form') {
        components.push(<ContactForm key={uid} {...item} />);
      } else if (item.type === 'contact-map') {
        components.push(<ContactMap key={uid} {...item} />);
      } else if (item.type === 'establishment-list') {
        components.push(<CardList key={uid} listType="establishment" {...item} />);
      } else if (item.type === 'event-list') {
        components.push(<CardList key={uid} listType="event" {...item} />);
      } else if (item.type === 'social-action-list') {
        components.push(<CardList key={uid} listType="social-action" {...item} />);
      } else if (item.type === 'quick-links') {
        components.push(<QuickLinks key={uid} {...item} />);
      }
    }
  }
  return (
    <>
      {components}
    </>
  );
}

export default Builder;
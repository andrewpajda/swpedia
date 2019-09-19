import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsibleTrigger from './CollapsibleTrigger';
import propTypes from 'prop-types';
import openIcon from '../../assets/ARROW OPEN.svg';
import closeIcon from '../../assets/ARROW CLOSE.svg';

const CollapsibleComponent = (props) => {
  return (
    <Collapsible
      triggerTagName='div'
      transitionTime={100}
      trigger={<CollapsibleTrigger headerText={props.headerText} icon={openIcon} />}
      triggerWhenOpen={<CollapsibleTrigger headerText={props.headerText} icon={closeIcon} />}
    >
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ut dolore ad sequi maxime asperiores at, eius sunt maiores incidunt earum unde reiciendis quos. Iste incidunt hic consequatur quibusdam assumenda? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore exercitationem repudiandae delectus quis inventore! Voluptatem voluptatibus, quae iste officiis iusto earum autem inventore magni ullam, omnis minus provident, quo asperiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere, corporis doloremque quae quis cum rem adipisci molestiae perferendis velit autem mollitia odit iste culpa nam. Assumenda eligendi sunt et?</p>
    </Collapsible>
  );
}

CollapsibleComponent.propTypes = {
  headerText: propTypes.string.isRequired,
  content: propTypes.element
}

export default CollapsibleComponent
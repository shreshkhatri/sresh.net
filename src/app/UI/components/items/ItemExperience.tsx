import * as React from 'react';
import Typography from '@mui/joy/Typography';
import { TypeExperience } from '@/app/lib/assets/types/types';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import _ from 'lodash';


export default function ItemExperience(ItemWorkExperienceProps: TypeExperience) {

 

  return (
    <div  >
      <Typography
        level="title-md"
        textTransform="uppercase"
        mb={1}
      >
        {ItemWorkExperienceProps.designation} @ {ItemWorkExperienceProps.employer}
      </Typography>
      <Typography
        level="title-sm"
        mb={1}
      >
        {ItemWorkExperienceProps.city}, {ItemWorkExperienceProps.country}
      </Typography>
      {
        _.isEmpty(ItemWorkExperienceProps.duties_responsibilities) ?
          <Typography>No job descriptions provided</Typography>
          :
          <List aria-labelledby="decorated-list-demo">
            {
              ItemWorkExperienceProps.duties_responsibilities.map((duty, index) => <ListItem key={index}><ListItemDecorator><MdKeyboardDoubleArrowRight /></ListItemDecorator><Typography level="body-sm" >{duty}</Typography></ListItem>)
            }
          </List>
      }
    </div>
  );
}


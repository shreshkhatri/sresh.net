import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import { Box } from '@mui/joy';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import { FaLaptopCode } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import ItemWorkExperience from './items/ItemWorkExperience';
import { workExperienceArray } from '@/assets/data/work_experience';
import { ItemWorkExperienceProps } from '@/app/types/types';
import { formatDate } from '@/assets/utilityFunctions';

const styleAlternateStep = {
  position: 'relative',
  textAlign: { xs: 'left', md: 'right' },
  left: {
    xs: 0,
    sm: 0,
    md: '-280px'
  }
};

export default function Experiences() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
      <Typography level="h2" sx={{textAlign:'center',paddingY:10}}>
        My Journey so far
      </Typography>
      <Box sx={{  width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

        <Stepper
          orientation="vertical"
          sx={{
            '--Stepper-verticalGap': '6rem',
            '--StepIndicator-size': '6rem',
            '--Step-gap': '1rem',
            '--Step-connectorInset': '0rem',
            '--Step-connectorRadius': '5rem',
            '--Step-connectorThickness': '4px',
            '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
            [`& .${stepClasses.completed}`]: {
              '&::after': { bgcolor: 'success.solidBg' },
            },
            [`& .${stepClasses.active}`]: {
              [`& .${stepIndicatorClasses.root}`]: {
                border: '1px solid black',
                boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
              },
            },
            [`& .${stepClasses.disabled} *`]: {
              color: 'neutral.softDisabledColor',
            },
            [`& .${typographyClasses['title-sm']}`]: {
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '10px',
            },
          }}
        >
          {
            workExperienceArray.map((workExperience: ItemWorkExperienceProps, index) => {
              return <Step key={index}
                completed
                indicator={
                  <StepIndicator >
                    <Typography level="title-md" >{formatDate(workExperience.startDate)}</Typography>
                  </StepIndicator>
                }
              >
                <ItemWorkExperience {...workExperience} />
              </Step>

            })
          }

        </Stepper>
      </Box>
    </Box>
  );
}

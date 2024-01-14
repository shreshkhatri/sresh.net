import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import { Box } from '@mui/joy';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import ItemWorkExperience from './items/ItemExperience';
import { workExperienceArray } from '@/app/lib/assets/data/work_experience';
import { formatDate } from '@/app/lib/assets/utilityFunctions';
import Fade from 'react-reveal/Fade';

export default function Experiences() {


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
      <Typography level="h2" sx={{ textAlign: 'center', paddingY: 5 }}>
        My Journey so far
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', paddingBottom: 10, paddingX: { xs: 4, sm: 4, md: 25, lg: 30, xl: 45 } }}>
        <Stepper
          orientation="vertical"
          sx={{
            '--Stepper-verticalGap': '6rem',
            '--StepIndicator-size': '6rem',
            '--Step-gap': '1rem',
            '--Step-connectorInset': '0rem',
            '--Step-connectorRadius': '5rem',
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
          <Fade>
            {
              workExperienceArray.map((workExperience, index) => {
                return <Step
                  key={index}
                  completed
                  sx={{
                    '--Step-connectorThickness':index==workExperienceArray.length-1?'0px':'3px'
                  }}
                  indicator={
                    <StepIndicator variant='outlined' sx={{borderStyle:'double',borderWidth: '5px'}} >
                      <Typography level="title-md" >{formatDate(workExperience.startDate)} </Typography>
                    </StepIndicator>}

                >
                  <ItemWorkExperience {...workExperience} />
                </Step>
              })
            }
          </Fade>

        </Stepper>
      </Box>
    </Box>
  );
}

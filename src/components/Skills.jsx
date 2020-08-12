import React from 'react';
import { skills } from '../data';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardTitle from './CardTitle';
import Grid from '@material-ui/core/Grid';
import SkillCard from './SkillCard';

export default function Skills() {
  return(
    <Card>
      <CardContent>
        <CardTitle>
          Skills
        </CardTitle>
        
        <Grid container spacing={2} justify="center">
          {
            skills.map((skill, i) => (
              <Grid item key={i} xs={12} sm='auto'>
                <SkillCard name={skill.name} logo={skill.logo} />
              </Grid>
            ))
          }
        </Grid>
      </CardContent>
    </Card>
  );
};
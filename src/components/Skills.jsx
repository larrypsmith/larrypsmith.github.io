import React from 'react';
import { skills } from '../data';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardTitle from './CardTitle';
import SkillChip from './SkillChip';

export default function Skills() {
  return(
    <Card>
      <CardContent>
        <CardTitle>
          Skills
        </CardTitle>
        <div>
          {
            skills.map((skill, i) => (
              <SkillChip
                key={i}
                name={skill.name}
                faClass={skill.faClass}
              />
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}
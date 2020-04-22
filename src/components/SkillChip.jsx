import React from 'react';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';

const SkillChip = ({ name, faClass }) => {
  return(
    <Chip
      label={name}
      icon={<Icon className={faClass ? `fab fa-${faClass}` : 'fas fa-code'} />}
    />
  )
};

export default SkillChip;
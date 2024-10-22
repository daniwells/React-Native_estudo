import React from 'react';
import TextCenter from '@/components/navigation/TextCenter';

const ScreenC = (props: any) => {
  // console.warn(props.route.params)
  return (
    <TextCenter bgColor={'#9932cd'} >
        Screen C - {props.route?.params?.number ? props.route.params.number : 0}
    </TextCenter>
  );
};

export default ScreenC;
import { Text, View, SafeAreaView, StyleSheet  } from 'react-native';
// import First from '@/components/First';
// import  CompDefault, { Comp1, Comp2 } from '@/components/Mult';
// import MinMax from '@/components/MinMax';
// import style from './styles';
// import Random from '@/components/Random';
// import Button from '@/components/Button';
// import Counter from '@/components/Counter';
// import Parent from '@/components/direct/Parent'
// import Parent from '@/components/indirect/Parent'
// import Distinct from '@/components/Distinct'
// import Family from '@/components/Relation/Parent'
// import Member from '@/components/Relation/Child'
// import UserLogged from '@/components/UserLogged'
// import RenderListFlat from '@/components/products/RenderListFlat'
// import EnterYourName from '@/components/EnterYourName'
// import Mega from '@/components/mega/Mega';
import TextCenter from '@/components/navigation/TextCenter';
import ScreenA from '@/views/ScreenA';
import ScreenB from '@/views/ScreenB';
import ScreenC from '@/views/ScreenC';

export default function HomeScreen(){
  return (
    <SafeAreaView style={styles.app}>
      <ScreenA/>
      <ScreenB/>
      <ScreenC/>
      {/* <Mega amtNumbers={7} /> */}
      {/* <EnterYourName/> */}
      {/* <RenderListFlat/> */}
      {/* <UserLogged user={{name:"Rosvaldo Da Fonseca", email:"fonse@outlook.com"}}></UserLogged> */}
      {/* <Family>
        <Member firstName='Marcos' lastName='Cunha' />
        <Member firstName='Felipe' lastName='dos Santos' />
      </Family> */}
      {/* <Distinct/> */}
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <Button/> */}
      {/* <Random max={10} min={2} /> */}
      {/* <MinMax min='2' max='10' /> */}
      {/* <Text style={styles.text}>Hello World!</Text>
      <First/>
      <CompDefault/>
      <Comp1/>
      <Comp2/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#fff',
  },
  app: {
    flexGrow: 1,
    backgroundColor: '#fff',
  }
});
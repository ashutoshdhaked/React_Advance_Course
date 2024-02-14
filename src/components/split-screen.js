import {styled} from 'styled-components';

const Container = styled.div`
     display : flex;
`
const Pannel = styled.div`
    flex : ${(p)=>p.flexvalue};
`

const SplitScreen = ({children, leftwidth = 1 , rightwidth = 1 })=>{
    const [left , right] = children;
    return(
          <Container>
            <Pannel flexvalue={leftwidth}>
             {left}
            </Pannel>
            <Pannel flexvalue={rightwidth}>
             {right}
            </Pannel>
          </Container>
    )
}

export default SplitScreen;

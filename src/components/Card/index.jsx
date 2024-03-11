import styled from 'styled-components'
import Quotation from './assets/bg-pattern-quotation.svg'

const ArticleStyled = styled.article`
    position: relative;
    border-radius: .75rem;
    width: 100%;
    padding: 1.5rem 2rem;
    box-shadow: 0 5px 15px rgba(0,0,0,.25);
    grid-area: ${props => props.$gridarea};
`
const QuotationImage = styled.img `
    position: absolute;
    top: 0;
    right: 18px;
    opacity: .5;
`
const  ArticleHeaderSection = styled.div`
    display: flex;
    align-items: center;
`
const ProfileImage = styled.img `
    border-radius: 100rem;
    border: 2px solid;
    border-color: ${props=>props.$bordercolor === 'true'?'var(--light-moderate-violet)':'#fff'};
    width: 42px;
`
const ParagraphBase = styled.p`
    color: ${props => props.$iswhite === 'true'? 'var(--very-dark-blackish-blue)': 'var(--white)'};
`
const ParagraphName = styled(ParagraphBase)`
    font-size: 1.2rem;
`
const ParagraphValidate = styled(ParagraphBase)`
    font-size: 1rem;
    opacity: .5;
`
const ParagraphTitle = styled(ParagraphBase)`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    position: relative;
`
const ParagraphTestimonials = styled(ParagraphBase)`
    opacity: .7;
    margin: 1.5rem 0;
    width: 97%;
`

export default function Card({id, name, image, title, testimonials, bgColor, iswhite, bordercolor, gridarea}){
    return (
        <ArticleStyled $gridarea={gridarea} style={{backgroundColor: `var(${bgColor})`}}>
            {id === 1?<QuotationImage src={Quotation}/>:''}
            <ArticleHeaderSection>
                <ProfileImage $bordercolor={bordercolor} src={image} alt='image'/>
                <div style={{paddingLeft: '1.5rem'}}>
                    <ParagraphName $iswhite={iswhite}>{name}</ParagraphName>
                    <ParagraphValidate $iswhite={iswhite}>Verified Graduate</ParagraphValidate>
                </div>
            </ArticleHeaderSection>
            <ParagraphTitle $iswhite={iswhite} style={{zIndex: '2'}}>{title}</ParagraphTitle>
            <ParagraphTestimonials $iswhite={iswhite}>{testimonials}</ParagraphTestimonials>
        </ArticleStyled>
    )
}
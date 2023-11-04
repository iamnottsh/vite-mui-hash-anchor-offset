import {AppBar, Container, Toolbar} from '@mui/material'
import {useState} from 'react'

export default function Site() {
  const [height, setHeight] = useState<number>()
  const ref = (current: HTMLElement) => {
    if (current) setHeight(current.offsetHeight)
  }
  return (
    <>
      <AppBar ref={ref}>
        <Toolbar/>
      </AppBar>
      <Toolbar/>
      <Container sx={{
        ...height !== undefined && {
          '& :target:before': {
            display: 'block',
            content: '" "',
            height: `${height}px`,
            marginTop: `${-height}px`,
            visibility: 'hidden',
          },
        },
      }}>
        <h1>1</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <div>
          <h1>13</h1>
          <div>
            <h1>89</h1>
            <div>
              <h2 id="1">po</h2>
            </div>
          </div>
        </div>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <a href="#1">1</a>
      </Container>
    </>
  )
}

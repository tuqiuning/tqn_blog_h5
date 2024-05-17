import React, { memo } from 'react';
import classNames from 'classnames';

const computerSVG = memo((props) => {
  return (
    <svg t="1702461521030" className={classNames('icon',props.className)} style={props.style} viewBox="0 0 1024 1024" version="1.1"
    xmlns="http://www.w3.org/2000/svg" p-id="29658">
    <path d="M554.666667 682.666667v42.666666h85.333333v85.333334H384v-85.333334h85.333333v-42.666666H170.666667V213.333333h682.666666v469.333334h-298.666666z m0-85.333334h213.333333V298.666667H256v298.666666h298.666667z" fill={props.color} p-id="29659"></path>
</svg>
  )
})

export default computerSVG
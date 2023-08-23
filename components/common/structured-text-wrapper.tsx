'use client'
import {
  StructuredText as StructuredTextType,
  isCode,
  isParagraph,
} from 'datocms-structured-text-utils'

import { StructuredText, renderNodeRule } from 'react-datocms/structured-text'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function StructuredTextWrapper({
  content,
}: {
  content: StructuredTextType
}) {
  return (
    <StructuredText
      data={content}
      customNodeRules={[
        renderNodeRule(isParagraph, ({ children, key }) => {
          return (
            <p key={key} className="text-xl">
              {children}
            </p>
          )
        }),
        renderNodeRule(isCode, ({ node, children, key }) => {
          return (
            // @ts-ignore: Component cannot be used as JSX element.
            <SyntaxHighlighter key={key} language={node.language} style={docco}>
              {node.code}
            </SyntaxHighlighter>
          )
        }),
      ]}
    />
  )
}

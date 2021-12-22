import Breadcrumb from './Breadcrumb'

export default function Content({ content }) {
  return (
    <div className="border bg-white md:border-gray-300 rounded-md p-3 px-4 prose max-w-full prose-headings:mb-3 prose-h2:mt-7 prose-p:mb-3 prose-hr:my-3 prose-pre:p-0 prose-td:align-top">
      <Breadcrumb />
      {content}
    </div>
  )
}

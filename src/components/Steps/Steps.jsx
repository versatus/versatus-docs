import React from 'react';

const Steps = ({ children, showNumbers = true }) => {
  const generateContent = () => {
    const newContent = []
    let current = { title: '', content: [] };
    React.Children.forEach(children, (child) => {
      if (['h2', 'h3', 'h4'].includes(child.type.name)) {
        if (current.title) newContent.push(current)
        current = { title: '', content: [] }
        current['title'] = child.props.children
      }
      else current['content'].push(child)
    })
    newContent.push(current)
    return newContent
  }

  return (
    <div className="steps-container">
      <div className='line'></div>
      <div>
        {
          generateContent().map((content, index) => (
            <div key={index} className="step-item">
              {showNumbers && <div className="step-number">{index + 1}</div>}
              <div className="step-body">
                <div id={content.title.replace(/\s+/g, '-').toLowerCase()} className="step-title anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module">{content.title}</div>
                <div className="step-content">{content.content}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Steps;

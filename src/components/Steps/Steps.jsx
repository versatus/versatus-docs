import React from 'react';

const Steps = ({ children }) => {
  const generateContent = () => {
    const newContent = []
    let current = { title: '', content: [] };
    React.Children.forEach(children, (child) => {
      // const current = { title: '', content: [] };
      if (['h2', 'h3'].includes(child.type.name)) {
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

      {
        generateContent().map((content, index) => (
          <div key={index} className="step-item">
            <div className="step-number">{index + 1}</div>
            <div className="step-body">
              <div className="step-title">{content.title}</div>
              <div className="step-content">{content.content}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Steps;

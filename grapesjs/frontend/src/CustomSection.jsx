import React, { useEffect, useState } from 'react';

const CustomSection = ({ contentId }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/content/load', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        setHtml(data?.pagesHtml[0]?.html);
        setCss(data?.pagesHtml[0]?.css);
        setJs(data?.pagesHtml[0]?.js);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    fetchContent();
  }, [contentId]);

  useEffect(() => {
    // Function to execute the fetched JavaScript
    const executeJavaScript = (jsCode) => {
      if (jsCode) {
        const script = document.createElement('script');
        script.textContent = jsCode;
        document.body.appendChild(script);
        document.body.removeChild(script);
      }
    };

    executeJavaScript(js);
  }, [js]);

  return (
    <div>
      <style>{css}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default CustomSection;

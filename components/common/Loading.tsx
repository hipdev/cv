const Loading: React.FC = () => {
  return (
    <div className="loading">
      <img
        src="https://media2.giphy.com/media/OiC5BKaPVLl60/giphy.gif?cid=3640f6095c818c2a6e53653945f5052e"
        alt="Loading"
      />
      <style jsx>
        {`
          .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          img {
            text-align: center;
            width: 100%;
          }
        `}
      </style>
    </div>
  )
}

export default Loading

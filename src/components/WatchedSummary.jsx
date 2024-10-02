/* eslint-disable react/prop-types */

function WatchedSummary({ watched }) {
  return (
    <div className="summary">
      <h2>
        {watched.length > 1 ? `Movies ` : `Movie `}
        you added
      </h2>
      <div>
        <>
          <span>
            {watched.length > 1
              ? `${watched.length} Movies`
              : `${watched.length} Movie`}
          </span>
        </>
      </div>
    </div>
  );
}

export default WatchedSummary;

type ProgressBarProps = {
  currentTime: number; // i sekunder
  duration: number;    // i sekunder
};

const ProgressBar = ({ currentTime, duration }: ProgressBarProps) => {
  const progress = (currentTime / duration) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;

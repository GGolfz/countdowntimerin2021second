import Box from "./box";
import {useEffect,useState} from 'preact/hooks';
const App = () => {
	const [timer,setTimer] = useState({
		day: 364,
		hour: 23,
		minute: 59,
		second: 59
	})
	useEffect(() => {
		const target = new Date("2024/01/01").getTime();
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const diff = target - now;
			let day = parseInt(diff / (60*60*24*1000));
			let hour = parseInt((diff % (60*60*24*1000)) /(60*60*1000));
			let minute = parseInt((diff % (60*60*1000)) /(60*1000));
			let second = parseInt((diff % (60*1000)) /(1000));
			setTimer({
				day,hour,minute,second
			})
		},1000);
		return () => clearInterval(interval)
	},[])
  return (
    <div className="bg-wrap">
      <div className="bg"></div>
      <div id="app">
        <div className="title">Countdown to 2022</div>
        <div className="timer">
          <Box num={timer.day} text="day" />
          <Box num={timer.hour} text="hour" />
          <Box num={timer.minute} text="minute" />
          <Box num={timer.second} text="second" />
        </div>
      </div>
    </div>
  );
};
export default App;

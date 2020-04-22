import React from "react";
import "./contentstyle.css";

//import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid, CircularProgress } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CountUp from "react-countup";

const Content = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed && confirmed === undefined) {
    return (
      <>
        <center>
          <CircularProgress color="secondary" thickness={6} />
          <span>Loading content</span>
        </center>
      </>
    );
  }

  return (
    <div className="container">
      {/* card1 */}

      <Card className="card">
        <CardContent>
          <Typography className="infected" gutterBottom variant="h4">
            Infected
          </Typography>

          <Typography color="textSecondary" variant="h6">
            Number :
            <CountUp
              start={0}
              end={confirmed.value}
              separator=","
              duration={3}
            />
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Date: {new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Card>

      {/* card2 */}

      <Card className="card">
        <CardContent>
          <Typography className="death" gutterBottom variant="h4">
            Deaths
          </Typography>

          <Typography color="textSecondary" variant="h6">
            Number:
            <CountUp start={0} end={deaths.value} separator="," duration={3} />
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Date: {new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Card>

      {/* card3 */}

      <Card className="card">
        <CardContent>
          <Typography className="recovered" gutterBottom variant="h4">
            Recovered
          </Typography>

          <Typography color="textSecondary" variant="h6">
            Number:
            <CountUp
              start={0}
              end={recovered.value}
              separator=","
              duration={3}
            />
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Date: {new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Content;

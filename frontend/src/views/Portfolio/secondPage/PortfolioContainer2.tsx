import React from "react";
import PortfolioPresenter from "./PortfolioPresenter2";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PortfolioIState {
  name: string;
  stack1: string;
  stack1_etc: boolean;
  stack1_score: number;
  reason1: string;
  stack2: string;
  stack2_etc: boolean;
  stack2_score: number;
  reason2: string;
  stack3: string;
  stack3_etc: boolean;
  stack3_score: number;
  reason3: string;
  stack4: string;
  stack4_etc: boolean;
  stack4_score: number;
  reason4: string;
  stack5: string;
  stack5_etc: boolean;
  stack5_score: number;
  reason5: string;
}
export default class extends React.Component<{}, PortfolioIState> {
  state = {
    name: "",
    stack1: "Java",
    reason1: "",
    stack1_etc: false,
    stack1_score: 50,
    stack2: "Java",
    reason2: "",
    stack2_etc: false,
    stack2_score: 50,
    stack3: "Java",
    reason3: "",
    stack3_etc: false,
    stack3_score: 50,
    stack4: "Java",
    reason4: "",
    stack4_etc: false,
    stack4_score: 50,
    stack5: "Java",
    reason5: "",
    stack5_etc: false,
    stack5_score: 50,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    var link = window.location.href.split("/");
    var portfolio_id = link[6].split("#")[0];
    if (
      window.sessionStorage.getItem("portfolio_list") !== undefined &&
      window.sessionStorage.getItem("portfolio_list")?.includes(portfolio_id)
    ) {
    } else {
      window.location.href = "../../main";
    }
    var skillSession = JSON.parse(
      window.sessionStorage.getItem("portfolio_2_skills") || ""
    );
    // console.log(skillSession);
    skillSession.length !== 0 &&
      this.setState({
        name: sessionStorage.getItem("portfolio_name") || "",
        stack1: skillSession[0].name,
        stack2: skillSession[1].name,
        stack3: skillSession[2].name,
        stack4: skillSession[3].name,
        stack5: skillSession[4].name,

        stack1_score: skillSession[0].percentage,
        stack2_score: skillSession[1].percentage,
        stack3_score: skillSession[2].percentage,
        stack4_score: skillSession[3].percentage,
        stack5_score: skillSession[4].percentage,

        reason1: skillSession[0].description,
        reason2: skillSession[1].description,
        reason3: skillSession[2].description,
        reason4: skillSession[3].description,
        reason5: skillSession[4].description,
      });
  }

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      pageButtonLeft: {
        "& > *": {
          margin: theme.spacing(1),
          position: "absolute",
          bottom: "10px",
          left: "-30px",
          "&:hover": {
            bottom: "11px",
            left: "-30px",
          },
        },
      },
      pageButtonRight: {
        "& > *": {
          margin: theme.spacing(1),
          position: "absolute",
          bottom: "10px",
          right: "-30px",
          "&:hover": {
            bottom: "11px",
            right: "-30px",
          },
        },
      },
      talented_bar: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      motion: {
        "& > *": {
          margin: theme.spacing(1),
          width: "40vw",
        },
      },
      reason: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
    })
  );
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  updateTerm = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "stack1") {
      this.setState({ stack1: value });
    } else if (name === "reason1") {
      this.setState({ reason1: value });
    } else if (name === "stack2") {
      this.setState({ stack2: value });
    } else if (name === "reason2") {
      this.setState({ reason2: value });
    } else if (name === "stack3") {
      this.setState({ stack3: value });
    } else if (name === "reason3") {
      this.setState({ reason3: value });
    } else if (name === "stack4") {
      this.setState({ stack4: value });
    } else if (name === "reason4") {
      this.setState({ reason4: value });
    } else if (name === "stack5") {
      this.setState({ stack5: value });
    } else if (name === "reason5") {
      this.setState({ reason5: value });
    }
  };

  sliderUpdate1 = async (event: object, values: number) => {
    await this.setState({ stack1_score: values });
  };
  tagUpdate1 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack1: values });
    if (values === "기타") {
      await this.setState({ stack1: "" });
      this.setState({ stack1_etc: true });
    }
  };
  sliderUpdate2 = async (event: object, values: number) => {
    await this.setState({ stack2_score: values });
  };
  tagUpdate2 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack2: values });
    if (values === "기타") {
      await this.setState({ stack2: "" });
      this.setState({ stack2_etc: true });
    }
  };
  sliderUpdate3 = async (event: object, values: number) => {
    await this.setState({ stack3_score: values });
  };
  tagUpdate3 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack3: values });
    if (values === "기타") {
      await this.setState({ stack3: "" });
      this.setState({ stack3_etc: true });
    }
  };
  sliderUpdate4 = async (event: object, values: number) => {
    await this.setState({ stack4_score: values });
  };
  tagUpdate4 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack4: values });
    if (values === "기타") {
      await this.setState({ stack4: "" });
      this.setState({ stack4_etc: true });
    }
  };
  sliderUpdate5 = async (event: object, values: number) => {
    await this.setState({ stack5_score: values });
  };
  tagUpdate5 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack5: values });
    if (values === "기타") {
      await this.setState({ stack5: "" });
      this.setState({ stack5_etc: true });
    }
  };
  valuetext = (value: number) => {
    return `${value}점`;
  };
  handleBeforeButton = async (event: React.FormEvent) => {
    var link = window.location.href.split("/");
    var portfolio_id = link[6].split("#")[0];
    window.location.href = `../1/${portfolio_id}`;
  };
  handleNextButton = async (event: React.FormEvent) => {
    var skills = [];
    var skill1 = {
      name: this.state.stack1,
      percentage: this.state.stack1_score,
      description: this.state.reason1,
    };
    skills.push(skill1);
    var skill2 = {
      name: this.state.stack2,
      percentage: this.state.stack2_score,
      description: this.state.reason2,
    };
    skills.push(skill2);
    var skill3 = {
      name: this.state.stack3,
      percentage: this.state.stack3_score,
      description: this.state.reason3,
    };
    skills.push(skill3);
    var skill4 = {
      name: this.state.stack4,
      percentage: this.state.stack4_score,
      description: this.state.reason4,
    };
    skills.push(skill4);
    var skill5 = {
      name: this.state.stack5,
      percentage: this.state.stack5_score,
      description: this.state.reason5,
    };
    skills.push(skill5);

    if (this.state.stack5 !== "" && this.state.reason5 !== "") {
      window.sessionStorage.setItem(
        "portfolio_2_skills",
        JSON.stringify(skills)
      );
      var link = window.location.href.split("/");
      var portfolio_id = link[6].split("#")[0];
      window.location.href = `../3/${portfolio_id}`;
    }
  };

  render() {
    const {
      name,
      stack1,
      stack1_etc,
      stack1_score,
      reason1,
      stack2,
      stack2_etc,
      stack2_score,
      reason2,
      stack3,
      stack3_etc,
      stack3_score,
      reason3,
      stack4,
      stack4_etc,
      stack4_score,
      reason4,
      stack5,
      stack5_etc,
      stack5_score,
      reason5,
    } = this.state;
    return (
      <PortfolioPresenter
        handleSubmit={this.handleSubmit}
        handleBeforeButton={this.handleBeforeButton}
        handleNextButton={this.handleNextButton}
        updateTerm={this.updateTerm}
        useStyles={this.useStyles}
        valuetext={this.valuetext}
        tagUpdate1={this.tagUpdate1}
        sliderUpdate1={this.sliderUpdate1}
        tagUpdate2={this.tagUpdate2}
        sliderUpdate2={this.sliderUpdate2}
        tagUpdate3={this.tagUpdate3}
        sliderUpdate3={this.sliderUpdate3}
        tagUpdate4={this.tagUpdate4}
        sliderUpdate4={this.sliderUpdate4}
        tagUpdate5={this.tagUpdate5}
        sliderUpdate5={this.sliderUpdate5}
        name={name}
        stack1={stack1}
        stack1_etc={stack1_etc}
        stack1_score={stack1_score}
        reason1={reason1}
        stack2={stack2}
        stack2_etc={stack2_etc}
        stack2_score={stack2_score}
        reason2={reason2}
        stack3={stack3}
        stack3_etc={stack3_etc}
        stack3_score={stack3_score}
        reason3={reason3}
        stack4={stack4}
        stack4_etc={stack4_etc}
        stack4_score={stack4_score}
        reason4={reason4}
        stack5={stack5}
        stack5_etc={stack5_etc}
        stack5_score={stack5_score}
        reason5={reason5}
      />
    );
  }
}

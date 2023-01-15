import { Dispatch, SetStateAction } from "react";
import { TimeSettings } from "../../types";

export const stageSwitch = (
  stage: number | undefined,
  setTimeLeft: Dispatch<SetStateAction<number>>,
  timeSettings: TimeSettings
) => {
  if (stage !== undefined) {
    switch (stage) {
      case 1:
        setTimeLeft(timeSettings.work * 60);
        break;
      case 2:
        setTimeLeft(timeSettings.shortBreake * 60);
        break;
      case 3:
        setTimeLeft(timeSettings.work * 60);
        break;
      case 4:
        setTimeLeft(timeSettings.shortBreake * 60);
        break;
      case 5:
        setTimeLeft(timeSettings.work * 60);
        break;
      case 6:
        setTimeLeft(timeSettings.shortBreake * 60);
        break;
      case 7:
        setTimeLeft(timeSettings.work * 60);
        break;
      case 8:
        setTimeLeft(timeSettings.longBreake * 60);
        break;
    }
  }
}

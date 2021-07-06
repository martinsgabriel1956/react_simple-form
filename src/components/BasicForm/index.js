import { ControlGroup } from "./styles";

import { Button } from "../UI/Button";

export function BasicForm() {
  return (
    <form>
      <ControlGroup>
          <div className="form-control">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-control">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" />
          </div>

        <div className="form-control">
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" />
        </div>
        <div className="form-actions">
          <Button>Submit</Button>
        </div>
      </ControlGroup>
    </form>
  );
}

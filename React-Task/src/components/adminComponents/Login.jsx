import React from "react";
import { connect } from "react-redux";
import { FORM_TYPES } from "../../constants";
import { updateState, handleLogin } from "../../actions/index";
const Login = props => {
  const { store } = props;
  const submit = e => {
    e.preventDefault();
    props.handleLogin(store, props.history);
  };
  return (
    <div className="container login-block">
      <i class="fas fa-user-ninja" />
      <form>
        {FORM_TYPES.map(form_type => (
          <div class="form-group">
            {form_type.type === "submit" ? null : (
              <label className="form-label">{form_type.label}</label>
            )}
            <input
              type={form_type.type}
              className={form_type.class}
              onChange={
                form_type.type === "submit"
                  ? null
                  : e => {props.updateState(form_type.state, e.target.value)}
              }
              onClick={form_type.type === "submit" ? e => submit(e) : null}
              value={form_type.value ? form_type.value : null}
            />
          </div>
        ))}
      </form>
      {store.error ? <span className="warning-msg">Error!</span> : null}
    </div>
  );
};

function mapStateToProps(state) {
  return { store: state };
}
export default connect(
  mapStateToProps,
  { updateState, handleLogin }
)(Login);

import React, { useEffect, useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// fix for header closeButton prop styles bug
import "./style.css";

const UserEditModal = ({ show, onClose, onSubmit, userData }) => {
  const [name, setName] = useState(userData.first_name || "");
  const [job, setJob] = useState(userData.job || "");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validationErrors = {};
    if (name.length > 10) {
      validationErrors.name = "Name can't be longer than 10 chars";
    }
    if (job.length > 10) {
      validationErrors.job = "Job description can't be longer than 10 chars";
    }
    setErrors(validationErrors);
  }, [name, job]);

  const handleSubmit = () => {
    if (errors.length) return;

    onSubmit({ name, job });
  };

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              New name
            </InputGroup.Text>
            <FormControl
              onChange={(e) => setName(e.target.value)}
              value={name}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              isInvalid={!!errors.name}
            />
            <FormControl.Feedback type="invalid">
              {errors.name}
            </FormControl.Feedback>
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              New job
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setJob(e.target.value)}
              value={job}
              isInvalid={!!errors.job}
            />
            <FormControl.Feedback type="invalid">
              {errors.job}
            </FormControl.Feedback>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserEditModal;

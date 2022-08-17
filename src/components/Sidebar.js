import React, { useState } from 'react';
import { Tab, Nav,Button,Modal } from 'react-bootstrap';
import Conversation from './Conversation';
import Contact from './Contact';
import ConversationModal from './ConversationModal'
import ContactModal from './ContactModal'

const CONVERSATION_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';
export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const [modalOpen,setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATION_KEY

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contact />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border small"> 
          Your Id: <span className="text-muted"> {id} </span>
        </div>
        <Button className="rounded-0" onClick={() => setModalOpen(true)}> 
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}> 
        {
          conversationsOpen ? <ConversationModal closeModal={closeModal}/> : <ContactModal closeModal={closeModal} />
        }
      
      </Modal>
    </div>
  );
}

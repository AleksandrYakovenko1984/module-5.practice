import React, { Component } from "react";
import IconButton from "./components/IconButton/IconButton";
import Modal from "./components/Modal/Modal";
import Clock from "./components/Clock/Clock";
import Reader from "./components/Reader/Reader";
import publication from "./publication.json";
import { ReactComponent as AddIcon } from "./icons/iconmonstr-plus-2.svg";
import { ReactComponent as IconClose } from "./icons/iconmonstr-trash-can-27.svg";
// import Tabs from "./components/Tabs/Tab";
// import tab from './tabs.json'

class App extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Clock />
        <Reader items={publication} />

        <IconButton type="button" onClick={this.togleModal}>
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.togleModal}>
            <h1>привет это контент модалки как children</h1>
            <p>
              Идейные соображения высшего порядка, а также сложившаяся структура
              организации требует определения и уточнения экономической
              целесообразности принимаемых изменений. Разнообразный и богатый
              опыт социально-экономическое развитие играет важную роль в
              формировании системы обучения кадров, соответствующей насущным
              потребностям. Для современного мира реализация намеченных плановых
              заданий проверки влечёт за собой интересный процесс внедрения
              модернизации новых принципов формирования материально-технической
              и кадровой базы.
            </p>
            <IconButton type="button" onClick={this.togleModal}>
              <IconClose width="25" height="25" fill="#fff" />
            </IconButton>
          </Modal>
        )}
      </>
    );
  }
}

export default App;

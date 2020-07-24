const { I } = inject();
const pageOnboarding = require("../page_objects/onboarding/PageOnboarding.js");
const pageTermosDeUso = require("../page_objects/onboarding/PageTermosDeUso.js");
const pageBemVindoCPF = require("../page_objects/onboarding/PageBemVindoCPF.js");
const pageBemVindoNomeCompleto = require("../page_objects/onboarding/PageBemVindoNomeCompleto.js");
const pageDadosPessoais = require("../page_objects/onboarding/PageDadosPessoais.js");
const pageBiometriaFacial = require("../page_objects/onboarding/PageBiometriaFacial.js");
const pageToken = require("../page_objects/onboarding/PageToken.js");
const pageSenha = require("../page_objects/onboarding/PageSenha.js");
const pageRepetirSenha = require("../page_objects/onboarding/PageRepetirSenha.js");
const pageConfiabilidade = require("../page_objects/onboarding/PageConfiabilidade.js");
const permissionModalActions = require("../page_actions/PermissionModalActions.js");

module.exports = {
  abrirMinhaContaMidwayApp() {
    I.waitForElement(pageOnboarding.botoes.btnAbrirMinhaContaMidway, 20);
    I.tap(pageOnboarding.botoes.btnAbrirMinhaContaMidway, 0, 0);
    permissionModalActions.permitirEnquantoUsaOApp();
  },

  clicarBotaoEntrar() {
    I.waitForElement(pageTermosDeUso.botoes.btnEntrar, 20);
    I.tap(pageTermosDeUso.botoes.btnEntrar, 0, 0);
  },

  preencherCPFEContinuar(value) {
    I.tap(pageBemVindoCPF.labels.labelCPF, 0, 0);
    I.fillField(pageBemVindoCPF.campos.campoCPF, value);
    I.tap(pageBemVindoCPF.botoes.btnContinuar, 0, 0);
  },

  preencherNomeEContinuar(value) {
    I.waitForElement(pageBemVindoNomeCompleto.labels.labelNomeCompleto, 20);
    I.tap(pageBemVindoNomeCompleto.labels.labelNomeCompleto, 0, 0);
    I.fillField(pageBemVindoNomeCompleto.campos.campoNomeCompleto, value);
    I.tap(pageBemVindoNomeCompleto.botoes.btnContinuar, 0, 0);
  },

  preencherDadosPessoaisEContinuar(dados) {
    I.waitForElement(pageDadosPessoais.labels.labelComoQuerSerChamado, 20);
    I.tap(pageDadosPessoais.labels.labelComoQuerSerChamado, 0, 0);
    I.fillField(
      pageDadosPessoais.campos.campoComoQuerSerChamado,
      dados.comoQueroSerChamado
    );

    I.tap(pageDadosPessoais.labels.labelCelular, 0, 0);
    I.fillField(pageDadosPessoais.campos.campoCelular, dados.celular);

    I.tap(pageDadosPessoais.labels.labelEmail, 0, 0);
    I.fillField(pageDadosPessoais.campos.campoEmail, dados.email);

    I.tap(pageDadosPessoais.labels.labelDataNascimento, 0, 0);
    I.fillField(
      pageDadosPessoais.campos.campoDataNascimento,
      dados.dataNascimento
    );

    I.swipeDown(pageDadosPessoais.botoes.btnContinuarContainer);

    I.tap(pageDadosPessoais.campos.aceitoCompartilharDados);

    I.tap(pageDadosPessoais.botoes.btnContinuar, 0, 0);
  },

  // Método ira passar por Biometria-facil
  async fazerBiometriaFacial() {
    await I.swipeHorizontal(80, 20);
    await I.swipeHorizontal(80, 20);
    await I.swipeHorizontal(80, 20);
    await I.swipeHorizontal(80, 20);
    permissionModalActions.permitir();
    // I.tap(pageBiometriaFacial.botoes.btnContinuar, 0, 0);
    // I.sendDeviceKeyEvent(27);
    
    I.tap(pageBiometriaFacial.botoes.btnContinuar, 0, 0);
    I.tap(pageBiometriaFacial.botoes.btnFotoBiometria, 0, 0);
    I.sendDeviceKeyEvent(27);
    I.waitForElement(pageBiometriaFacial.botoes.btnContinuar, 20);
    I.tap(pageBiometriaFacial.botoes.btnContinuar, 0, 0);
  },

    //Método Token
    preencherToken(dados) {
    I.waitForElement(pageToken.campos.token, 10);
    I.tap(pageToken.campos.token, 0, 0);
    //I.fillField(pageToken.campos.token, value)

    I.fillField(
      pageToken.campos.token,
      dados.tokenValido);

      I.fillField(
        pageToken.campos.token1,
        dados.tokenValido);

      I.fillField(
        pageToken.campos.token2,
        dados.tokenValido);

      I.fillField(
        pageToken.campos.token3,
        dados.tokenValido);

      I.fillField(
        pageToken.campos.token4,
        dados.tokenValido);

      I.fillField(
        pageToken.campos.token5,
        dados.tokenValido);
    },

    preencherSenha(dados) {
     // I.waitForElement(pageSenha.campos.senha, 10);
      I.tap(pageSenha.campos.senha, 0, 0);

      I.fillField(
        pageSenha.campos.senha,
        dados.senhaValida[1]);

      // I.fillField(
      //   pageSenha.campos.senha1,
      //   dados.senhaValida[2]);

      // I.fillField(
      //   pageSenha.campos.senha2,
      //   dados.senhaValida2);

      // I.fillField(
      //   pageSenha.campos.senha3,
      //   dados.senhaValida3);

      // I.fillField(
      //   pageSenha.campos.senha4,
      //   dados.senhaValida4);

      // I.fillField(
      //   pageSenha.campos.senha5,
      //   dados.senhaValida5);   
    },

    preencherSenhaNovamente(dados){
      I.tap(pageRepetirSenha.campos.senha, 0, 0);

      I.fillField(
        pageRepetirSenha.campos.senha,
        dados.senhaValida);

      I.fillField(
        pageRepetirSenha.campos.senha1,
        dados.senhaValida1);

      I.fillField(
        pageRepetirSenha.campos.senha2,
        dados.senhaValida2);

      I.fillField(
        pageRepetirSenha.campos.senha3,
        dados.senhaValida3);

      I.fillField(
        pageRepetirSenha.campos.senha4,
        dados.senhaValida4);

      I.fillField(
        pageRepetirSenha.campos.senha5,
        dados.senhaValida5);   
    },

    compartilharDadosEContinuar(){
      I.waitForElement(pageConfiabilidade.campos.aceitoCompartilharDadosGrupoGuararapes, 10);
      I.tap(pageConfiabilidade.campos.aceitoCompartilharDadosGrupoGuararapes, 0, 0)
      I.tap(pageConfiabilidade.campos.aceitoCompartilharDadosBancoMidway, 0, 0);
  
      I.swipeDown(pageConfiabilidade.botoes.btnContinuar);
  
      I.tap(pageConfiabilidade.botoes.btnContinuar, 0, 0);
    }

    
};

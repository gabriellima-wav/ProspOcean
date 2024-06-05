import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  TelaHome: undefined;
  TelaLogin: undefined;
  TelaCadastro: undefined;
  TelaInicial: undefined;
  CategoriaIdentificacao: undefined;
  CategoriaEncontros: undefined;
  CategoriaCuidados: undefined;
  CategoriaClassificacao: undefined;
  CategoriaRelatorios: undefined;
  CategoriaMonitoramento: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

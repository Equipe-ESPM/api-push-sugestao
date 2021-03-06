import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  Index,
  JoinColumn,
} from 'typeorm';
import { Auditoria } from './Auditoria.entity';
import { Inscricao } from './inscricao.entity';
import { OrgaoConcurso } from './orgaoConcurso.entity';

@Entity()
export class Concurso extends Auditoria {
  @Column({ type: 'varchar', length: 1000, nullable: true })
  nome: string;

  @Column({ type: 'varchar', length: 3000, nullable: true })
  descricao: string;

  @Column({ type: 'int' })
  acessos: number;

  @Column({ type: 'date', nullable: true })
  datainiciodivulgacao: Date;

  @Column({ type: 'date', nullable: true })
  datainicioinscricao: Date;

  @Column({ type: 'date', nullable: true })
  datafiminscricao: Date;

  @Column({ type: 'time', nullable: true })
  horainicioinscricao: Date;

  @Column({ type: 'time', nullable: true })
  horafiminscricao: Date;

  @Column({ type: 'date', nullable: true })
  datafimvigencia: Date;

  @Column({ nullable: true })
  liberarvisualizacao: boolean;

  @Column({ nullable: true })
  etapaprova: boolean;

  @Column({ type: 'int' })
  @Index('idbancoorigem_index')
  idbancoorigem: number;

  @OneToMany(type => Inscricao, inscricao => inscricao.concurso)
  inscricao: Inscricao[];

  @ManyToOne(type => OrgaoConcurso, orgaoConcurso => orgaoConcurso.concurso)
  @JoinColumn({ name: 'orgaoconcursoid' })
  @Index('orgaoconcursoid_index')
  orgaoConcurso: OrgaoConcurso;
}
